describe('Device Passcode Test', () => {
    
    it('should enter device passcode', async () => {
        // Scroll to passcode element
        const passcodeBtn = await driver.$(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.example.all_in_one:id/passcode"))'
        );
        await passcodeBtn.click();

        // Wait for showPasscodeBtn to be visible and click
        const showPasscodeBtn = await driver.$(
            'android=new UiSelector().resourceId("com.example.all_in_one:id/passButton")'
        );
        await showPasscodeBtn.waitForDisplayed({ timeout: 60000 });
        await showPasscodeBtn.click();

        
        // Enter device passcode 1-2-3-4 and ENTER
        await driver.pressKeyCode(8);  // KEYCODE_1
        await driver.pressKeyCode(9);  // KEYCODE_2
        await driver.pressKeyCode(10); // KEYCODE_3
        await driver.pressKeyCode(11); // KEYCODE_4
        await driver.pressKeyCode(66); // KEYCODE_ENTER

        // Optional sleep if needed
        await driver.pause(10000);
    });

    after(async () => {
        if (driver) {
            await driver.deleteSession();
        }
    });
});
