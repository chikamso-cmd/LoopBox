# LoopBox

LoopBox is a modern fintech application designed to help you manage your finances with ease. It provides a comprehensive suite of features for tracking transactions, managing payments, and visualizing your financial data.

## Demo

You can view a live demo of the application [here](https://loopbox-savings.netlify.app/).

## GitHub Repository

The source code for this project is available on GitHub: [https://github.com/chikamso-cmd/LoopBox](https://github.com/chikamso-cmd/LoopBox).


## Features

- **Authentication:** Secure user authentication including login, signup, and password recovery.
- **Secure PIN:** Enhanced security with a personal PIN for sensitive operations.
- **Dashboard:** An intuitive dashboard providing a quick overview of your finances, including charts and analysis.
- **Transactions:** A detailed view of your transaction history with advanced filtering options.
- **Member Management:** Easily manage members within your financial circle.
- **Payments:** Flexible payment options including bank transfers, card payments, and USSD.
- **Bill Reminders:** Stay on top of your upcoming bills with timely reminders.
- **Onboarding:** A smooth and friendly onboarding experience for new users.
- **Responsive Design:** A fully responsive interface that works seamlessly on both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Charting:** Chart.js
- **Routing:** React Router
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd LoopBox
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:

```sh
npm run build
```

This will create a `dist` folder with the optimized production build.

## Project Structure

```
c:\Users\User\Desktop\Loopbox\LoopBox\
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───STYLE GUIDE.md
├───vite.config.js
├───.git\...
├───node_modules\...
├───public\
│   ├───vite.svg
│   └───favicon\
│       ├───android-chrome-192x192.png
│       ├───android-chrome-512x512.png
│       ├───apple-touch-icon.png
│       ├───favicon-16x16.png
│       ├───favicon-32x32.png
│       ├───favicon.ico
│       └───site.webmanifest
└───src\
    ├───App.css
    ├───App.jsx
    ├───index.css
    ├───layout.jsx
    ├───main.jsx
    ├───todo.md
    ├───assets\
    │   ├───apple.png
    │   ├───Google.png
    │   ├───login_bg.png
    │   ├───logo.png
    │   ├───Mastercard-Logo 1.png
    │   ├───react.svg
    │   ├───signup_bg.png
    │   ├───user_1.png
    │   ├───user_2.png
    │   └───user_3.png
    ├───Authflow\
    │   ├───ForgotPassword.jsx
    │   ├───VerifyCode.jsx
    │   ├───components\
    │   │   └───Header.jsx
    │   ├───Mainsauthcreen\
    │   │   └───MainAuth.jsx
    │   └───securepinsetup\
    │       ├───Securepin.jsx
    │       └───components\
    │           ├───PinSetup.jsx
    │           ├───StatusBar.jsx
    │           └───SuccessScreen.jsx
    ├───components\
    │   ├───analysis.jsx
    │   ├───barchart.jsx
    │   ├───Body.jsx
    │   ├───button.jsx
    │   ├───card.jsx
    │   ├───data.jsx
    │   ├───members.jsx
    │   ├───nav.jsx
    │   ├───sidebar.jsx
    │   ├───treanaction-filter.jsx
    │   └───upcomingbills.jsx
    ├───mobilehomescreen\
    │   ├───MobileHomeScreen.jsx
    │   ├───components\
    │   │   └───BottomNav.jsx
    │   └───views\
    │       ├───BankTransfer.jsx
    │       ├───BankUssd.jsx
    │       ├───CardPayment.jsx
    │       ├───Dashboard.jsx
    │       ├───MemberList.jsx
    │       ├───NextToReceive.jsx
    │       ├───Payments.jsx
    │       ├───SelectBank.jsx
    │       ├───Settings.jsx
    │       ├───TransactionHistory.jsx
    │       ├───UpcomingBills.jsx
    │       ├───UssdPayment.jsx
    │       ├───WithdrawSuccess.jsx
    │       └───WithdrayFunds.jsx
    ├───mobileOnboarding\
    │   ├───MobileLogin.jsx
    │   ├───MobileSignup.jsx
    │   ├───OnboardingMain.jsx
    │   ├───logincomponents\
    │   │   ├───InputFields.jsx
    │   │   └───SocialIcons.jsx
    │   ├───onboardingcomponents\
    │   │   ├───FingerPrint.jsx
    │   │   ├───Icons.jsx
    │   │   ├───Reasons.jsx
    │   │   └───ScreenLayout.jsx
    │   └───Signupcomponents\
    │       ├───signupimputfields.jsx
    │       ├───signupsocialbutton.jsx
    │       └───signupstatusbar.jsx
    ├───modal-styles\
    │   ├───addpayment.css
    │   ├───confirm.css
    │   ├───credit-card.css
    │   └───modal.css
    ├───modals\
    │   ├───addpayment.jsx
    │   ├───confirm.jsx
    │   ├───credit-card.jsx
    │   └───modal.jsx
    ├───modules\
    │   └───shared.module.css
    ├───pages\
    │   ├───Login.jsx
    │   ├───Main.jsx
    │   ├───member.jsx
    │   ├───payment.jsx
    │   ├───Signup.jsx
    │   └───transactions.jsx
    ├───pages-styles\
    │   ├───member.css
    │   └───transactions.css
    ├───SplashScreen\
    │   ├───Splashscreen.jsx
    │   └───components\
    │       ├───Constant.jsx
    │       ├───Logo.jsx
    │       └───StatusBar.jsx
    └───styles\
        ├───analysis.css
        ├───base.css
        ├───Body.css
        ├───card.css
        ├───data.css
        ├───layout.css
        ├───login.css
        ├───main.css
        ├───members.css
        ├───nav.css
        ├───payment.css
        ├───sidebar.css
        ├───signup.css
        └───upcomingbills.css
```