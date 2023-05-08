# Checkin Help Center

##### Atomic Design

##### NextJS 13

##### Typescript

##### Zustand

##### Styled Components

checkin-help-center
├── app - nextjs pages
│ ├── landing - home page
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── (category)
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── (article)
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── (section)
│ │ ├── page.tsx
│ │ └── layout.tsx
├── components
│ ├── atoms
│ │ ├── Button.tsx
│ │ ├── Image.tsx
│ │ ├── Input.tsx
│ │ ├── Link.tsx
│ │ └── Text.tsx
│ ├── molecules
│ │ ├── breadcrumb
│ │ │ └── index.tsx
│ │ ├── search
│ │ │ └── index.tsx
│ ├── organisms
│ │ ├── Card
│ │ │ └── index.tsx
│ ├── layout
│ │ ├── pageLayout.tsx
│ │ └── theme.tsx
├── hooks
│ └── (add your custom hooks here)
├── public
│ └── index.html
│ └── robots.txt
├── utils
│ ├── api
│ ├── api.ts
├── config
│ └── section.ts
├── assets
│ ├── images
│ ├── icons
│ └── fonts
├── styles
│ ├── global
│ ├── theme
│ └── utils
├── types
│ └── types.d.ts
└── store
├── zustand.tsx
└── index.tsx

Each article belong to a section and each section belong to a category
categories are knowledge base, how-to-guides, updates and others

### Knowledge Base - [category]

- #### My account - [section]
  - ##### Getting Started - [prefix]
    - [ ] How to create an account - [article]
    - [ ] How to login
    - [ ] How to reset password
    - [ ] How to change password
    - [ ] How to change email
- ### General support - [section]
  - [ ] How to create a listing
  - [ ] How to edit a listing
  - [ ] How to delete a listing
  - [ ] Create a unique checkin experience
- ### Payment - [section]
  - [x] How to add a payment method

/help-center-app
|-- /src
|-- /api
|-- apiClient.ts
|-- categoriesApi.ts
|-- sectionsApi.ts
|-- articlesApi.ts
|-- /components
|-- /Category
|-- Category.tsx
|-- Category.module.scss
|-- /Section
|-- Section.tsx
|-- Section.module.scss
|-- /Article
|-- Article.tsx
|-- Article.module.scss
|-- /pages
|-- /HelpCenter
|-- HelpCenter.tsx
|-- HelpCenter.module.scss
|-- /[categorySlug]
|-- CategoryPage.tsx
|-- CategoryPage.module.scss
|-- /[categorySlug]/[sectionSlug]
|-- SectionPage.tsx
|-- SectionPage.module.scss
|-- /[categorySlug]/[sectionSlug]/[articleSlug].tsx
|-- ArticlePage.tsx
|-- ArticlePage.module.scss
|-- /utils
|-- index.ts
|-- /public
|-- /assets
|-- /images
|-- logo.svg
|-- package.json
|-- tsconfig.json
|-- README.md

real value = 75% of xd size

