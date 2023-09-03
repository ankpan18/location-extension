This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started with Locator

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores. 

## Current Features

For now, this extension allows us to get Location based on IP Address. It also handles error cases in case of wrong IP address or authentication key for the used API.
### Suceess
![image](https://github.com/ankpan18/location-extension/assets/79756942/aba2f37c-a6ec-44fe-b6e3-eb1a2eb635d2)

### Wrong IP Address
![image](https://github.com/ankpan18/location-extension/assets/79756942/a4f3b61d-36cc-4459-bfb0-d3c2c739943e)

### Wrong Auth Key
![image](https://github.com/ankpan18/location-extension/assets/79756942/0db1a14d-a209-4a7f-bd61-b1e37bdf3fd2)

## Demo Video

https://github.com/ankpan18/location-extension/assets/79756942/541fda11-9865-4d33-90ec-c1916f84cf50
