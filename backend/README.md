# Welcome to the Project! 👋

I'm excited to have you onboard! Follow the steps below to set up and run the project smoothly.
If you encounter any issues, please reach me out.

---

## 🚀 Requirements

To get started, ensure you have the following tools installed:

- **Yarn**

---

## 👍 Nice to Have (Optional)

While not mandatory, the following tools can enhance your development experience:

- **nvm**: Node Version Manager for managing multiple Node.js versions.
- **depcheck**: A handy tool to find unused dependencies.

---

## 🛠 Installation

### Install Yarn

If you don’t have Yarn installed globally, run:

```sh
npm install -g yarn
```

### Install Project Dependencies

Once Yarn is ready, install the project’s dependencies with:

```sh
yarn install
```

---

## 🏃 Run the Project Locally

### Step 1: Environment variables

Make sure to move the `.env.example` to `.env` and to fill every parameters

### Step 2: Start the Application

Run the following command to launch the public API:

```sh
yarn dev start:public-api
```

---

## 🔧 Generate SDK

### SDK Client

After starting the application for the first time, the `swagger.json` file will be generated. You can then generate the SDK client by running:

```sh
yarn codegen:public-api
```

---

### Need More Help?

Feel free to contact me if you need further assistance. Happy review! 🚀
