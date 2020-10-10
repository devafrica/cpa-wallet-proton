# CpaCoin Wallet

![Download Count](https://img.shields.io/github/downloads/devafrica/cpa-wallet-proton/total.svg)
![Open Issue Count](https://img.shields.io/github/issues/devafrica/turtle-wallet-proton)
![License](https://img.shields.io/github/license/turtlecoin/turtle-wallet-proton)
![Version](https://img.shields.io/github/v/release/devafrica/cpa-wallet-proton)

## Installing

**Check out the full tutorial on how to install and use this wallet at the [official TurtleCoin docs page](https://docs.turtlecoin.lol/guides/wallets/using-proton-wallet)!**

## Development Setup (All Platforms)

### Dependencies

#### You will need the following dependencies installed before you can proceed to the "Setup" step:

- Node.JS (latest LTS 14.x) https://nodejs.org/

- Yarn https://yarnpkg.com/en/

- Git https://git-scm.com/downloads

Tip: If you already have a different version of node.js installed besides 14.x, try using [Node Version Manager](https://github.com/nvm-sh/nvm#install--update-script).

#### Setup

First, clone the repo via git:

```bash
git clone https://github.com/devafrica/cpa-wallet-proton.git
```

And then install the dependencies with yarn.

```bash
$ cd cpa-wallet-proton
$ yarn
```

Run the wallet.

```bash
$ yarn start
```

### Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

### Packaging

To package apps for the local platform:

```bash
$ yarn package
```

## License

All of the code is released under the GPLv3 license.
See included License file for more details.
© [ExtraHash](https://github.com/ExtraHash)
