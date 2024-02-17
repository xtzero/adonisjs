# 简介

## AdonisJS 是什么?

<!-- AdonisJS is a TypeScript-first web framework for Node.js. You can use it to create a full-stack web application or a JSON API server. -->

AdonisJS 是一个基于 Node.js 的，使用 TypeScript 编写的 web 后端框架，你可以使用 AdonisJS 创建一个全栈的 web 应用，或者是一个 JSON 接口服务。

<!-- At the fundamental level, AdonisJS [provides structure to your applications](./folder_structure.md), configures a [seamless TypeScript development environment](../fundamentals/typescript_build_process.md), and offers a vast collection of well-maintained and extensively documented packages. -->

在基础层面上，AdonisJS [为你的应用提供了一个基本的目录结构](/guide/folder-structure/)，并配置了一个[无缝的 TypeScript 开发环境](/guide/typeScript-build-process/)，并提供了大量正在维护且被广泛应用的包。

<!-- We envision teams using AdonisJS **spending less time** on trivial decisions like cherry-picking npm packages for every minor feature, writing glue code, debating for the perfect folder structure, and **spending more time** delivering real-world features critical for the business needs. -->

我们设想 AdonisJS 的用户可以花**更少**的时间用在做琐碎的决定上，比如挑选 npm 包，编写胶水代码，讨论完美的文件结构。比起这些，**花更多时间**在编写真实有效的代码上更加至关重要。

### 前端无关

<!-- AdonisJS focuses on the backend and lets you choose the frontend stack of your choice. -->

AdonisJS 注重于后端开发，并且将前端技术栈的选择权交到你的手里。

<!-- If you like to keep things simple, pair AdonisJS with a [traditional template engine](../http/views_and_templates.md) to generate static HTML on the server. Or create a JSON API for your frontend Vue/React application. -->

如果你喜欢让事情变得简单，你可以在 AdonisJS 中使用[传统的模板引擎](/guide/views-and-templates/)来生成静态 HTML 页面。或者你也可以使用 AdonisJS 为你的前端 Vue/React 应用创建一个 JSON API 服务。

<!-- AdonisJS aims to provide you with batteries to create a robust backend application from scratch. Be it sending emails, validating user input, performing CRUD operations, or authenticating users. We take care of it all. -->

AdonisJS 的目标是为你提供一个预先配置好的环境，让你可以创建一个强大的后端应用程序。无论是发送电子邮件、验证用户输入、执行 CRUD 操作还是验证用户身份，都可以放心交给 AdonisJS。

<!-- ### Modern and Type-safe -->
### 现代化和类型安全

<!-- AdonisJS is built on top of modern JavaScript primitives. We use ES modules, Node.js sub-path import aliases, SWC for executing TypeScript source, and Vite for assets bundling. -->

AdonisJS 基于现代 JavaScript 构建。我们使用 ES 模块，Node.js 子路径导入别名，用于执行 TypeScript 的 SWC 以及用于处理资源捆绑的 Vite。

<!-- Also, TypeScript plays a considerable role when designing the framework's APIs. For example, AdonisJS has: -->
此外，在设计框架接口的过程中，TypeScript 帮了很大忙。举例来说，AdonisJS 具有： 

<!-- - [Type-safe event emitter](../digging_deeper/emitter.md#making-events-type-safe) -->
- [类型安全的事件触发器](/guide/emitter/index.html#making-events-type-safe)
<!-- - [Type-safe environment variables](/guide/env/) -->
- [类型安全的环境变量](/guide/environment/)
<!-- - [Type-safe validation library](/guide/validation/) -->
- [类型安全的参数验证库](/guide/validation/)

### 拥抱 MVC

<!-- AdonisJS embraces the classic MVC design pattern. You start by defining the routes using the functional JavaScript API, bind controllers to them and write logic to handle the HTTP requests within the controllers. -->

AdonisJS 使用传统的 MVC 设计模式。你会从使用函数式的 JavaScript API 定义一个路由开始，绑定对应的控制器，在控制器内部编写 HTTP 的请求逻辑。

```ts
import router from '@adonisjs/core/services/router'
import PostsController from '#controllers/posts_controller'

router.get('posts', [PostsController, 'index'])
```

<!-- Controllers can use models to fetch data from the database and render a view (aka template) as a response. -->

控制器可以使用模型从数据库中获取数据，并渲染为视图（也就是常说的模板），这就构成了一个响应。


```ts
import { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index({ view }: HttpContext) {
    const posts = await Post.all()
    return view.render('pages/posts/list', { posts })
  }
}
```

<!-- If you are building an API server, you can replace the view layer with a JSON response. But, the flow of handling and responding to the HTTP requests remains the same. -->

如果你正在构建一个 API 服务，你可以使用 JSON 响应来代替视图。处理和响应 HTTP 的请求流程不变。

```ts
import { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index({ view }: HttpContext) {
    const posts = await Post.all()
    // delete-start
    return view.render('pages/posts/list', { posts })
    // delete-end
    // insert-start
    /**
     * Posts array will be serialized to JSON
     * automatically.
     */
    return posts
    // insert-end
  }
}
```

## 前提条件

<!-- The AdonisJS documentation is written as a reference guide, covering the usage and the API of several packages and modules maintained by the core team. -->

AdonisJS 文档是作为参考指南编写的，涵盖了核心团队维护的几个包和模块的用法和 API。

<!-- **The guide does not teach you how to build an application from scratch**. If you are looking for a tutorial, we recommend starting your journey with [Adocasts](https://adocasts.com/). Tom (the creator of Adocasts) has created some highly quality screencasts, helping you to take the first steps with AdonisJS. -->

**这个文档不会教你如何从头开始构建应用程序**。如果你在寻找教程，我们推荐你从 [Adocasts](https://adocasts.com/) 开始。Tom（Adocasts 的作者）做了一个高质量的教程视频，可以帮助你如何迈出 AdonisJS 的第一步。

<!-- With that said, the documentation extensively covers the usage of available modules and the inner workings of the framework. -->

话虽如此，该文档还是广泛涵盖了可用模块的使用以及框架的内部工作原理。

## VSCode 扩展

<!-- You can develop an AdonisJS application on any code editor supporting TypeScript. However, we have developed several extensions for VSCode to enhance the development experience further. -->

你可以使用一些支持 TypeScript 的代码编辑器来开发一个 AdonisJS 应用。然而，我们开发了一系列的 VSCode 扩展，以进一步提升开发体验。

- [**AdonisJS**](https://marketplace.visualstudio.com/items?itemName=jripouteau.adonis-vscode-extension) - 查看应用路由，运行 ace 命令，迁移数据库，在编辑器中直接阅读文档。
<!-- View application routes, run ace commands, migrate the database, and read documentation directly from your code editor. -->


- [**Edge**](https://marketplace.visualstudio.com/items?itemName=AdonisJS.vscode-edge) - 在语法高亮、自动补全和代码块上极大提升你的开发体验。
<!-- Supercharge your development workflow with support for syntax highlighting, autocompletion, and code snippets. -->


- [**Japa**](https://marketplace.visualstudio.com/items?itemName=jripouteau.japa-vscode) - 不用离开代码编辑器，使用快捷键或是从侧边栏中直接运行测试。
<!-- - Run tests without leaving your code editor using Keyboard shortcuts or run them directly from the activity sidebar. -->

<!-- ## Community and Help -->
## 交流和帮助

- [**Discord server**](https://discord.gg/vDcEjq6) - 与其他开发者交流。

- [**X (就是 Twitter)**](https://twitter.com/adonisframework) - 及时了解框架的最新信息。

- [**GitHub 讨论区**](https://github.com/adonisjs/core/discussions) - 浏览已有的话题，或是寻求帮助。
<!-- Browse existing topics and ask for help. -->

- [**软件包生态**](https://packages.adonisjs.com/) - 探索官方和社区构建的包。
<!-- Discover official and community built packages. -->

- [**优先支持**](https://adonisjs.com/support_program) - 获得优先支持并直接联系框架作者。
<!-- Get priority support and a direct line of contact with the framework creator. -->

<!-- ## Recent releases -->
## 最近发布
<!-- Following is the list of recent releases. [Click here](./releases.md) to view all the releases. -->
[点击这里](https://docs.adonisjs.com/guides/releases) 查看全部的发布版本。

## 赞助商

[点击查看赞助商列表](https://docs.adonisjs.com/guides/introduction#sponsors)。