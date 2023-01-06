function SoSIM_Dev_Login()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/login");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Sets the text '45046129' in the 'PhoneTextField' text editor.
  Aliases.browser.LoginPage.PhoneTextField.SetText("45046129");
  //Clicks the 'LoginButton' button.
  Aliases.browser.LoginPage.LoginButton.ClickButton();
  //Clicks the 'VerificationDigit1' control.
  Aliases.browser.LoginPage.VerificationDigit1.Click();
  //Sets the text '1' in the 'VerificationDigit1' text editor.
  Aliases.browser.LoginPage.VerificationDigit1.SetText("1");
  //Sets the text '1' in the 'VerificationDigit2' text editor.
  Aliases.browser.LoginPage.VerificationDigit2.SetText("1");
  //Sets the text '1' in the 'VerificationDigit3' text editor.
  Aliases.browser.LoginPage.VerificationDigit3.SetText("1");
  //Sets the text '1' in the 'VerificationDigit4' text editor.
  Aliases.browser.LoginPage.VerificationDigit4.SetText("1");
  //Sets the text '1' in the 'VerificationDigit5' text editor.
  Aliases.browser.LoginPage.VerificationDigit5.SetText("1");
  //Sets the text '1' in the 'VerificationDigit6' text editor.
  Aliases.browser.LoginPage.VerificationDigit6.SetText("1");
}

function SoSIM_Dev_Delete_Email_Address()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'SettingsLeftMenu' control.
  Aliases.browser.MainPage.SettingsLeftMenu.Click();
  //Clicks the 'textnodeAccountSettings' control.
  Aliases.browser.MainPage.textnodeAccountSettings.Click();
  //Clicks the 'textnodeCommunicationSetting' control.
  Aliases.browser.MainPage.textnodeCommunicationSetting.Click();
  //Clicks the 'radiobutton' radio button.
  Aliases.browser.MainPage.radiobutton.ClickButton();
  //Clicks the 'ConfirmButton' button.
  Aliases.browser.MainPage.ConfirmButton.ClickButton();
}

function SoSIM_Dev_History_20230101_To_20230103()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'TransactionHistoryLeftMenu' control.
  Aliases.browser.MainPage.TransactionHistoryLeftMenu.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.TransactionHistoryPage.Wait();
  //Clicks the 'button2' button.
  Aliases.browser.TransactionHistoryPage.button2.ClickButton();
  //Clicks the 'button3' button.
  Aliases.browser.TransactionHistoryPage.button3.ClickButton();
  //Clicks the 'button1' button.
  Aliases.browser.TransactionHistoryPage.button1.ClickButton();
  //Clicks the 'button4' button.
  Aliases.browser.TransactionHistoryPage.button4.ClickButton();
  //Clicks the 'textnodeJanuary2023' control.
  Aliases.browser.TransactionHistoryPage.textnodeJanuary2023.Click();
  //Clicks the 'button32' button.
  Aliases.browser.TransactionHistoryPage.button32.ClickButton();
  //Clicks the 'button' button.
  Aliases.browser.TransactionHistoryPage.button.ClickButton();
}

function SoSIM_Dev_RealName_Registeration_Fail()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'SettingsLeftMenu' control.
  Aliases.browser.MainPage.SettingsLeftMenu.Click();
  //Clicks the 'buttonManageRealNameRegistration' button.
  Aliases.browser.MainPage.buttonManageRealNameRegistration.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.RealNameRegisterPage.Wait();
  //Clicks the 'IDTextField' control.
  Aliases.browser.RealNameRegisterPage.IDTextField.Click();
  //Sets the text 'Y6786774' in the 'IDTextField' text editor.
  Aliases.browser.RealNameRegisterPage.IDTextField.SetText("Y6786774");
  //Clicks the 'textboxHkidlast' control.
  Aliases.browser.RealNameRegisterPage.textboxHkidlast.Click();
  //Sets the text '1' in the 'textboxHkidlast' text editor.
  Aliases.browser.RealNameRegisterPage.textboxHkidlast.SetText("1");
  //Selects the '2000' item of the 'YearSelectField' combo box.
  Aliases.browser.RealNameRegisterPage.YearSelectField.ClickItem("2000");
  //Selects the '03' item of the 'MonthSelectField' combo box.
  Aliases.browser.RealNameRegisterPage.MonthSelectField.ClickItem("03");
  //Selects the '06' item of the 'DaySelectField' combo box.
  Aliases.browser.RealNameRegisterPage.DaySelectField.ClickItem("06");
  //Clicks the 'GoToManagementPageButton' button.
  Aliases.browser.RealNameRegisterPage.GoToManagementPageButton.ClickButton();
}

function SoSIM_Dev_RealName_Registeration_NotMatch()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'SettingsLeftMenu' control.
  Aliases.browser.MainPage.SettingsLeftMenu.Click();
  //Clicks the 'buttonManageRealNameRegistration' button.
  Aliases.browser.MainPage.buttonManageRealNameRegistration.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.RealNameRegisterPage.Wait();
  //Clicks the 'IDTextField' control.
  Aliases.browser.RealNameRegisterPage.IDTextField.Click();
  //Sets the text 'Y678674' in the 'IDTextField' text editor.
  Aliases.browser.RealNameRegisterPage.IDTextField.SetText("Y678674");
  //Clicks the 'textboxHkidlast' control.
  Aliases.browser.RealNameRegisterPage.textboxHkidlast.Click();
  //Sets the text '8' in the 'textboxHkidlast' text editor.
  Aliases.browser.RealNameRegisterPage.textboxHkidlast.SetText("8");
  //Selects the '1999' item of the 'YearSelectField' combo box.
  Aliases.browser.RealNameRegisterPage.YearSelectField.ClickItem("1999");
  //Selects the '03' item of the 'MonthrSelectField' combo box.
  Aliases.browser.RealNameRegisterPage.MonthrSelectField.ClickItem("03");
  //Selects the '15' item of the 'DayrSelectField' combo box.
  Aliases.browser.RealNameRegisterPage.DayrSelectField.ClickItem("15");
  //Clicks the 'GoToManagementPageButton' button.
  Aliases.browser.RealNameRegisterPage.GoToManagementPageButton.ClickButton();
}

function SoSIM_Dev_Buy_Local_1Days500MB_Left_Menu()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeBuyOffers' control.
  Aliases.browser.MainPage.textnodeBuyOffers.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.BuyOffersPage.Wait();
  //Clicks the 'LocalImage' control.
  Aliases.browser.BuyOffersPage.LocalImage.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageThreeComHkSosimPrepaidDev24.Wait();
  //Clicks the 'button1DayLocalDataFup500mb' button.
  Aliases.browser.pageThreeComHkSosimPrepaidDev24.button1DayLocalDataFup500mb.ClickButton();
  //Clicks the 'PurchaseButton' button.
  Aliases.browser.pageThreeComHkSosimPrepaidDev24.PurchaseButton.ClickButton();
  //Clicks the 'buttonBuy' button.
  Aliases.browser.pageThreeComHkSosimPrepaidDev24.buttonBuy.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageThreeComHkSosimPrepaidDev28.Wait();
  //Clicks the 'buttonToDashboard' button.
  Aliases.browser.pageThreeComHkSosimPrepaidDev28.buttonToDashboard.ClickButton();
}

function SoSIM_Dev_Change_Lanuage()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'SettingsLeftMenu' control.
  Aliases.browser.MainPage.SettingsLeftMenu.Click();
  //Clicks the 'textnodeApplicationLanguage' control.
  Aliases.browser.MainPage.textnodeApplicationLanguage.Click();
  //Clicks the 'textnodeChinese' control.
  Aliases.browser.MainPage.textnodeChinese.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageThreeComHkSosimPrepaidDev27.Wait();
  //Clicks the 'panel' control.
  Aliases.browser.pageThreeComHkSosimPrepaidDev27.panel.Click();
}

function SoSIM_Dev_Logout()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://dev.three.com.hk/SoSim/dev2/en/account/dashboard/local");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeSwitchUser' control.
  Aliases.browser.MainPage.textnodeSwitchUser.Click();
}

