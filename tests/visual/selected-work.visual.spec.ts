import { expect, test, type Page } from '@playwright/test'

const VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 375, height: 812 },
] as const

async function openReadySelectedWork(page: Page, viewport = VIEWPORTS[0]) {
  await page.setViewportSize(viewport)
  await page.goto('/#work', { waitUntil: 'load' })

  await page.evaluate(async () => {
    await document.fonts.ready
  })

  const section = page.locator('.selected-work')
  const productImages = section.getByRole('img')

  await expect(section).toBeVisible()
  await expect(productImages).toHaveCount(2)

  for (const image of await productImages.all()) {
    await image.evaluate(async (element) => {
      if (!(element instanceof HTMLImageElement)) {
        throw new Error('The Selected Work media target is not an image element.')
      }

      await element.decode()
    })
  }

  await section.scrollIntoViewIfNeeded()
}

async function expectNoHorizontalOverflow(page: Page) {
  const documentWidth = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))

  expect(documentWidth.scrollWidth).toBeLessThanOrEqual(documentWidth.clientWidth)
}

test('Selected Work exposes one real CTA and factual proof', async ({ page }) => {
  await openReadySelectedWork(page)

  const section = page.locator('.selected-work')
  const caseStudyLink = section.getByRole('link', { name: 'View case study' })

  await expect(caseStudyLink).toHaveAttribute(
    'href',
    '/projects/orionlabs',
  )
  await expect(section.getByRole('link')).toHaveCount(1)
  await expect(section.locator('[aria-disabled="true"]')).toHaveCount(2)
  await expect(section.locator('.selected-work__proof-item')).toHaveCount(4)

  await caseStudyLink.click()
  await expect(page).toHaveURL(/\/projects\/orionlabs$/)
  await expect(
    page.getByRole('heading', { level: 1, name: 'OrionLabs' }),
  ).toBeVisible()
})

for (const viewport of VIEWPORTS) {
  test(`Selected Work fits at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await openReadySelectedWork(page, viewport)
    await expectNoHorizontalOverflow(page)
  })
}

for (const viewport of [VIEWPORTS[0], VIEWPORTS[3]]) {
  test(`Selected Work visual at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await openReadySelectedWork(page, viewport)

    // The sticky Header has its own visual coverage. Hiding it here prevents
    // Playwright from repeating it while stitching the tall mobile section.
    await page.locator('.site-header').evaluate((header) => {
      header.style.visibility = 'hidden'
    })

    await expect(page.locator('.selected-work')).toHaveScreenshot(
      `selected-work-${viewport.width}x${viewport.height}.png`,
      {
        animations: 'disabled',
        caret: 'hide',
      },
    )
  })
}
