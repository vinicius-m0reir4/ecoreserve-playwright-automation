import { test, expect } from '@playwright/test';

test.describe('Smoke Test - EcoReserve', () => {

    test('TC-SMOKE-001 - Deve carregar a página inicial', async ({ page }) => {

        await page.goto('/');

        await expect(
            page.getByRole('heading', {
                name: 'Descubra lugares incríveis.'
            })
        ).toBeVisible();

    });

});