
# Next.js Blog Website
This project is a simple blog website sample, study made to understand the working logic of next.js.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Tech Stack

- React
- Next
- **CMS** - [Sanity.io](https://www.sanity.io/)
- SCSS
- CSS Modules


## Demo

The design of this blog site is a code version of a design file I found on Figma. A few minor changes have been made. 

[**Deployed version of the project**](https://next-blog-with-sanity-phixqvqj0-halikali.vercel.app/)

[**The design file of the project on Figma**](https://www.figma.com/file/vV4kRho0FVmqISjQAXyjrv/A-blog-template-(Community)?node-id=0%3A1)


## Getting Started
Make sure you follow the steps below in order

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/halikali/next-blog.git
```

2. Open the repository you cloned using your code editor or

```bash
  cd next-blog
```

3. Install dependencies

```bash
  npm install
```

4. Install the Sanity.io cli
```bash
  npm install -g @sanity/client
```

5. Create an .env file in the project root directory and Make the following variable definitions

NEXT_PUBLIC_SANITY_DATASET=production \
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id" \
NEXT_PUBLIC_SANITY_TOKEN="sanity-auth-token"

**[You can find your "your-project-id" and "sanity-auth-token" values here](https://www.sanity.io/manage)**


6. Follow the steps below
```bash
  sanity init
```
  ✨ Enter key is used to make selection.
  - Select the Create new project option
  - Give the project a name and confirm the selection with the enter key.
  - For question **Use the default dataset configuration? (Y/n)**, press "y" key and confirm with enter key 
  - **Project output path:** You can skip the phase with the enter key.
  - For question **Select project template**, select the blog schema option
  - Sanity.io must have created a file for you. You can open this file with the cd/"project-name" command on the terminal screen.
  - You can run the CMS with the `sanity start` command.
  - You can view the CMS on [`http://localhost:3333`]( http://localhost:3333)

:warning: :warning:You must login to the account you are logged into in the `sanity init` command window. Be careful not to log in with different login options.

7. Start the server

```bash
  npm run dev
```

You can view the client on [`http://localhost:3000`](http://localhost:3000)

:green_circle: Congratulations! Project run successfully :green_circle: 
