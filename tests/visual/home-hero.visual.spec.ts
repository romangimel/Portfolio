import { expect, test, type Page } from '@playwright/test'

async function openReadyHomeHero(page: Page) {
  await page.goto('/', { waitUntil: 'load' })

  await page.evaluate(async () => {
    await document.fonts.ready
  })

  const artwork = page.getByRole('img', { name: 'Portrait of Roman Gudovich' })
  await expect(artwork).toBeVisible()
  await artwork.evaluate(async (image) => {
    if (!(image instanceof HTMLImageElement)) {
      throw new Error('The Hero artwork target is not an image element.')
    }

    await image.decode()
  })
}

test('desktop approved Header and Hero composition', async ({ page }) => {
  const viewport = { width: 1440, height: 900 }

  await page.setViewportSize(viewport)
  await openReadyHomeHero(page)

  const headerBox = await page.locator('.site-header').boundingBox()
  const heroBox = await page.locator('.hero').boundingBox()

  if (!headerBox || !heroBox) {
    throw new Error('The approved desktop Header and Hero must both be visible for capture.')
  }

  const clipTop = Math.min(headerBox.y, heroBox.y)
  const clipBottom = Math.max(
    headerBox.y + headerBox.height,
    heroBox.y + heroBox.height,
  )

  await expect(page).toHaveScreenshot(
    'home-header-hero-1440x900.png',
    {
      animations: 'disabled',
      caret: 'hide',
      clip: {
        x: 0,
        y: clipTop,
        width: viewport.width,
        height: clipBottom - clipTop,
      },
    },
  )
})

for (const viewport of [
  { width: 430, height: 932 },
  { width: 375, height: 812 },
]) {
  test(`mobile approved Hero body at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)
    await openReadyHomeHero(page)

    const heroBody = page.locator('.hero__layout')
    const heroBodyBox = await heroBody.boundingBox()

    if (!heroBodyBox) {
      throw new Error('The approved Hero body is not visible for capture.')
    }

    // The clip begins after the unfinished narrow Header and spans the full
    // viewport width so the approved edge-to-edge artwork bleed is protected.
    await expect(page).toHaveScreenshot(
      `home-hero-body-${viewport.width}x${viewport.height}.png`,
      {
        animations: 'disabled',
        caret: 'hide',
        clip: {
          x: 0,
          y: heroBodyBox.y,
          width: viewport.width,
          height: heroBodyBox.height,
        },
      },
    )
  })
}
