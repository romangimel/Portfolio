import { expect, test, type Page } from '@playwright/test'

const MOBILE_VIEWPORT = { width: 430, height: 932 }
const NARROW_MOBILE_VIEWPORT = { width: 375, height: 812 }
const DESKTOP_VIEWPORT = { width: 1024, height: 768 }

async function openReadyHomePage(
  page: Page,
  viewport = MOBILE_VIEWPORT,
) {
  await page.setViewportSize(viewport)
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

function getMenuToggle(page: Page) {
  return page.getByRole('button', { name: /navigation menu/i })
}

async function expectNoHorizontalOverflow(page: Page) {
  const documentWidth = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))

  expect(documentWidth.scrollWidth).toBeLessThanOrEqual(
    documentWidth.clientWidth,
  )
}

test.describe('mobile SiteHeader behavior', () => {
  test.beforeEach(async ({ page }) => {
    await openReadyHomePage(page)
  })

  test('starts closed with desktop navigation controls hidden', async ({
    page,
  }) => {
    const toggle = getMenuToggle(page)

    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(
      page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeAttached()
    await expect(
      page.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeHidden()
    await expect(page.locator('.site-header__connect')).toBeHidden()
  })

  test('toggles open and closed while preserving placeholder semantics', async ({
    page,
  }) => {
    const toggle = getMenuToggle(page)

    await toggle.click()

    const mobileNavigation = page.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(mobileNavigation).toBeVisible()
    await expect(
      mobileNavigation.getByText('About', { exact: true }),
    ).toHaveAttribute('aria-disabled', 'true')
    await expect(
      mobileNavigation.getByText('Tech', { exact: true }),
    ).toHaveAttribute('aria-disabled', 'true')
    await expect(
      mobileNavigation.locator('.site-mobile-nav__connect'),
    ).toHaveAttribute('aria-disabled', 'true')
    await expect(mobileNavigation.getByRole('link')).toHaveCount(1)

    await toggle.click()

    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(mobileNavigation).not.toBeAttached()
  })

  test('closes after an outside click', async ({ page }) => {
    const toggle = getMenuToggle(page)

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await page.getByRole('heading', { level: 1 }).click()

    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(
      page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeAttached()
  })

  test('closes on Escape and restores focus to the toggle', async ({ page }) => {
    const toggle = getMenuToggle(page)

    await toggle.focus()
    await page.keyboard.press('Enter')
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await page.keyboard.press('Escape')

    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle).toBeFocused()
  })

  test('closes after activating the real Work destination', async ({ page }) => {
    const toggle = getMenuToggle(page)

    await toggle.click()
    const mobileNavigation = page.getByRole('navigation', {
      name: 'Mobile navigation',
    })

    await mobileNavigation.getByRole('link', { name: 'Work' }).click()

    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(mobileNavigation).not.toBeAttached()
  })

  test('clears open state across a mobile-to-desktop transition', async ({
    page,
  }) => {
    const toggle = getMenuToggle(page)

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await page.setViewportSize(DESKTOP_VIEWPORT)
    await expect(toggle).toBeHidden()
    await expect(
      page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeAttached()

    await page.setViewportSize(MOBILE_VIEWPORT)

    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(
      page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeAttached()
  })
})

for (const viewport of [MOBILE_VIEWPORT, NARROW_MOBILE_VIEWPORT]) {
  test(`has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await openReadyHomePage(page, viewport)
    await expectNoHorizontalOverflow(page)
  })
}

test('keeps the open menu and CTA inside the 375px viewport', async ({
  page,
}) => {
  await openReadyHomePage(page, NARROW_MOBILE_VIEWPORT)

  await getMenuToggle(page).click()

  const mobileNavigation = page.getByRole('navigation', {
    name: 'Mobile navigation',
  })
  const menuBounds = await mobileNavigation.boundingBox()
  const connectCta = mobileNavigation.locator('.site-mobile-nav__connect')
  const visibleViewportWidth = await page.evaluate(
    () => document.documentElement.clientWidth,
  )

  if (!menuBounds) {
    throw new Error('The open mobile navigation must have visible bounds.')
  }

  expect(menuBounds.x).toBeGreaterThanOrEqual(0)
  expect(menuBounds.x + menuBounds.width).toBeLessThanOrEqual(
    visibleViewportWidth,
  )
  await expect(connectCta).toBeVisible()
  expect(
    await connectCta.evaluate(
      (element) => element.scrollWidth <= element.clientWidth,
    ),
  ).toBe(true)
  await expectNoHorizontalOverflow(page)
})
