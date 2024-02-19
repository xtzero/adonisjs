# 安装

<!-- Before creating a new application, you should ensure that you have Node.js and npm installed on your computer. AdonisJS needs `Node.js >= 20.6`. -->

在创建新的应用之前，你需要确定你的电脑上安装了 Node.js 和 npm。AdonisJS 需要 Node.js 的版本 `>= 20.6`。

<!-- You may install Node.js using either the [official installers](https://nodejs.org/en/download/) or [Volta](https://docs.volta.sh/guide/getting-started). Volta is a cross-platform package manager that installs and runs multiple Node.js versions on your computer. -->

你可以通过[官方安装程序](https://nodejs.org/en/download/)或者是 [Volta](https://docs.volta.sh/guide/getting-started)。Volta 是一个跨平台的包管理器，可以在你的电脑上安装和运行多个版本的 Node.js。

::: code-group
```sh [Verify Node.js version]
node -v
# v21.0.0
```
:::

<!-- ## Creating a new application -->
## 创建新应用

<!-- You may create a new project using [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init), [yarn create](https://classic.yarnpkg.com/en/docs/cli/create) or [pnpm create](https://pnpm.io/tr/next/cli/create). These commands will download the [create-adonisjs](http://npmjs.com/create-adonisjs) initializer package and begin the installation process. -->

你可以使用 [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init), [yarn create](https://classic.yarnpkg.com/en/docs/cli/create) 或者是 [pnpm create](https://pnpm.io/tr/next/cli/create) 来创建新的项目。这些命令会下载安装程序 [create-adonisjs](http://npmjs.com/create-adonisjs)，并开始安装进程。

<!-- You may customize the initial project output using one of the following CLI flags. -->
你可以在初始化项目时使用以下 CLI 选项来定制项目的初始化流程。

- `--kit`: 为你的项目选择 [初始化模板](#starter-kits)。 你可以在 **web**, **api**, 或者是 **slim** 中选择。

<!-- - `--db`: Specify the database dialect of your choice. You can choose between **sqlite**, **postgres**, **mysql**, or **mssql**. Defaults to `sqlite`. -->
- `--db`: 指定数据库。 你可以在 **sqlite**, **postgres**, **mysql**, 或者是 **mssql** 中选择。 默认是 `sqlite`.

<!-- - `--git-init`: Initiate the git repository. Defaults to `false`. -->
- `--git-init`: 初始化 git 存储库，默认是 `false`。

<!-- - `--auth-guard`: Specify the authentication guard of your choice. You can choose between **session**, **access_tokens**, or **basic_auth**. Defaults to `session`. -->
- `--auth-guard`: 指定身份验证方式。 你可以在 **session**, **access_tokens**, 或者是 **basic_auth** 中选择。 默认是 `session`.

- `--install`: 跳过依赖安装的提示。 使用 `--no-install` 选项可以在不安装项目依赖的情况下创建项目。

::: code-group

```sh [npm]
npm init adonisjs@latest hello-world
```

```sh [yarn]
yarn create adonisjs@latest hello-world
```

```sh [pnpm]
pnpm create adonisjs@latest hello-world
```

:::

<!-- When passing CLI flags using the `npm init` command, make sure to use [double slash twice](https://stackoverflow.com/questions/43046885/what-does-do-when-running-an-npm-command). Otherwise, `npm init` will not pass the flags to the `create-adonisjs` initializer package. For example: -->

当使用 `npm init` 命令并传递 CLI 参数时，请确保你使用了[两次双斜线](https://stackoverflow.com/questions/43046885/what-does-do-when-running-an-npm-command)。另外，`npm init`  不会将参数传递给 `create-adonisjs`。举个例子：

```sh
# 创建一个带有 MySQL 的项目
npm init adonisjs@latest hello-world -- --db=mysql

# 使用 API 模板创建一个带有 PostgreSQL 的项目
npm init adonisjs@latest hello-world -- --db=postgres --kit=api

#  使用 API 模板和访问令牌保护创建一个项目
npm init adonisjs@latest hello-world -- --kit=api --auth-guard=access_tokens
```

## 初始化模板

<!-- Starter kits serve as a starting point for creating applications using AdonisJS. They come with an [opinionated folder structure](/guide/folder_structure/), pre-configured AdonisJS packages, and the necessary tooling you need during development. -->

初始化模板是创建一个 AdonisJS 应用的起点。它们拥有[特别的文件结构](/guide/folder_structure/)，提前配置好的 AdonisJS 包，以及在你开发过程中的必要工具。


::: tip note

<!-- The official starter kits use ES modules and TypeScript. This combination allows you to use modern JavaScript constructs and leverage static-type safety. -->

官方的初始化模板使用了 ES 模块以及 typeScript。这二者的组合允许你使用现代 JavaScript 结构，并且支持静态类型安全。

:::

<!-- ### Web starter kit -->
### Web 初始化模板

<!-- The Web starter kit is tailored for creating traditional server renderer web apps. Do not let the keyword **"traditional"** discourage you. We recommend this starter kit if you make a web app with limited frontend interactivity. -->

Web 初始化模板是为传统的服务端渲染应用定制的。不要在意**传统的** 这个关键词，如果你的 Web 应用在前端上的交互有限，我们很推荐你使用这个初始化模板。

<!-- The simplicity of rendering HTML on the server using [Edge.js](https://edgejs.dev) will boost your productivity as you do not have to deal with complex build systems to render some HTML. -->

Edge.js 在服务器上渲染 HTML 非常简单，因为你不必处理复杂的构建系统来渲染某些 HTML。这将极大提高你的生产力。

<!-- Later, you can use [Hotwire](https://hotwired.dev), [HTMX](http://htmx.org), or [Unpoly](http://unpoly.com) to make your applications navigate like a SPA and use [Alpine.js](http://alpinejs.dev) to create interactive widgets like a dropdown or a modal. -->

然后，你可以使用 [Hotwire](https://hotwired.dev)、[HTMX](http://htmx.org)、或者是 [Unpoly](http://unpoly.com)，让你的应用可以像单页面应用一样进行导航。同样的，你也可以使用 [Alpine.js](http://alpinejs.dev) 来创建一个例如下拉菜单或者是模态层之类的响应式组件。


```sh
npm init adonisjs@latest -- -K=web

# 切换数据库引擎
npm init adonisjs@latest -- -K=web --db=mysql
```

<!-- The web starter kit comes with the following packages. -->
Web 初始化模板包含如下软件包


<table>
<thead>
<tr>
<th width="180px">软件包</th>
<th>描述</th>
</tr>
</thead>
<tbody><tr>
<td><code>@adonisjs/core</code></td>
<!-- <td>The framework&#39;s core has the baseline features you might reach for when creating backend applications.</td> -->
<td>
框架的核心，具有你在创建应用后可能会用到的全部基本功能。
</td>
</tr>
<tr>
<td><code>edge.js</code></td>
<!-- <td>The <a href="https://edgejs.dev">edge</a> template engine for composing HTML pages.</td> -->
<td><a href="https://edgejs.dev">edge</a> 模板引擎，用来组织 HTML 页面。</td>
</tr>
<tr>
<td><code>@vinejs/vine</code></td>
<!-- <td><a href="https://vinejs.dev">VineJS</a> is one of the fastest validation libraries in the Node.js ecosystem.</td> -->
<td><a href="https://vinejs.dev">VineJS</a> 是 Node.js 生态系统下最快的参数验证库之一。</td>
</tr>
<tr>
<td><code>@adonisjs/lucid</code></td>
<!-- <td>Lucid is a SQL ORM maintained by the AdonisJS core team.</td> -->
<td>Lucid 是 AdonisJS 核心团队提供的 SQL ORM 库。</td>
</tr>
<tr>
<td><code>@adonisjs/auth</code></td>
<!-- <td>The authentication layer of the framework. It is configured to use sessions.</td> -->
<td>是框架的验证层，搭配 session 来使用。</td>
</tr>
<tr>
<td><code>@adonisjs/shield</code></td>
<!-- <td>A set of security primitives to keep your web apps safe from attacks like <strong>CSRF</strong> and <strong>‌ XSS</strong>.</td> -->
<td>
一组安全组件，确保您的网络应用程序免受 <strong>CSRF</strong>  和 <strong>‌ XSS</strong> 等攻击。</td>
</tr>
<tr>
<td><code>@adonisjs/static</code></td>
<td>从 <code>/public</code> 中为你的应用提供静态资源的中间件。</td>
</tr>
<tr>
<td><code>vite</code></td>
<td><a href="https://vitejs.dev/">Vite</a> 用来编译前端资源。</td>
</tr>
</tbody></table>

---

<!-- ### API starter kit -->
### API 初始化模板

<!-- The API starter kit is tailored for creating JSON API servers. It is a trimmed-down version of the `web` starter kit. If you plan to build your frontend app using React or Vue, you may create your AdonisJS backend using the API starter kit. -->

API 初始化模板用来创建 JSON API 服务，它是一个基于 `web 初始化模板` 的修剪版本。如果你计划使用 React 或 Vue 来构建你的前端应用，你可以使用 API 初始化模板来创建你的 AdonisJS 后端应用。

```sh
npm init adonisjs@latest -- -K=api

# 切换数据库引擎
npm init adonisjs@latest -- -K=api --db=mysql
```

<!-- In this starter kit: -->
在这个初始化模板中：

<!-- - We remove support for serving static files. -->
- 我们会移除静态资源支持。

<!-- - Do not configure the views layer and vite. -->
- 不要配置视图层和 Vite。

<!-- - Turn off XSS and CSRF protection and enable CORS protection. -->
- 关掉 XSS 和 CSRF 防护，打开 CORS 防护。

<!-- - Use the ContentNegotiation middleware to send HTTP responses in JSON. -->
- 使用[内容协商](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)中间件来发送 JSON HTTP 响应。

<!-- The API starter kit is configured with session-based authentication. However, if you wish to use tokens-based authentication, you can use the `--auth-guard` flag. -->

API 初始化模板配置了基于 session 的身份验证系统，然而，如果你希望使用基于 token 的身份验证系统，你可以使用 `--auth-guard`。

你也可以参考: [我应该使用哪个身份验证系统?](/guide/auth/index.html#choosing-an-auth-guard)

```sh
npm init adonisjs@latest -- -K=api --auth-guard=access_tokens
```

---

### Slim 初始化模板
<!-- For minimalists, we have created a `slim` starter kit. It comes with just the core of the framework and the default folder structure. You may use it when you do not want any bells and whistles of AdonisJS. -->

出于极简主义，我们创建了一个 `slim` 初始化模板，它只包含一个框架核心和默认的文件结构。你可以在你不需要任何 AdonisJS 的其它功能时使用它。

```sh
npm init adonisjs@latest -- -K=slim

# 切换数据库引擎
npm init adonisjs@latest -- -K=slim --db=mysql
```

---

<!-- ### Bring your starter kit -->
### 更多初始化模板
<!-- Starter kits are pre-built projects hosted with a Git repository provider like GitHub, Bitbucket, or Gitlab. You can also create your starter kits and download them as follows. -->

初始化模板是一个在 Git 存储库上下载的提前构建好的项目。你也可以创建你自己的初始化模板并像下面这样下载它们。

```sh
npm init adonisjs@latest -- -K="github_user/repo"

# 从 GitLab 下载
npm init adonisjs@latest -- -K="gitlab:user/repo"

# 从 BitBucket 下载
npm init adonisjs@latest -- -K="bitbucket:user/repo"
```

<!-- You can download private repos using Git+SSH authentication using the `git` mode. -->

你也可以使用 `git` 模式，使用 Git + SSH 的验证方式，下载私有的存储库

```sh
npm init adonisjs@latest -- -K="user/repo" --mode=git
```

<!-- Finally, you can specify a tag, branch, or commit. -->
你也可以指定 标签、分支、或者是某个提交。

```sh
# 分支
npm init adonisjs@latest -- -K="user/repo#develop"

# 标签
npm init adonisjs@latest -- -K="user/repo#v2.1.0"
```

<!-- ## Starting the development server -->
## 启动开发服务器
<!-- Once you have created an AdonisJS application, you may start the development server by running the `node ace serve` command. -->
当你创建好了 AdonisJS 应用后，你可以通过运行 `node ace serve` 来启动开发服务器。

<!-- Ace is a command line framework bundled inside the framework's core. The `--watch` flag monitors the file system and restarts the development server on file change. -->

Ace 是一个绑定在框架内核中的命令行框架。`--watch` 标志会让框架监听文件系统，并且在文件内容发生改变时重启服务。

```sh
node ace serve --watch
```

<!-- Once the development server runs, you may visit [http://localhost:3333](http://localhost:3333) to view your application in a browser. -->

当开发服务运行，你可以在浏览器中访问 [http://localhost:3333](http://localhost:3333) 来查看你的应用。

<!-- ## Building for production -->
## 构建生产版本

<!-- Since AdonisJS applications are written in TypeScript, they must be compiled into JavaScript before running in production. -->

由于 AdonisJS 是使用 TypeScript 编写的，它必须在生产环境运行之前编译为 JavaScript。

<!-- You may create the JavaScript output using the `node ace build` command. The JavaScript output is written to the `build` directory. -->

你可以使用 `node ace build` 编译项目，编译后的 JavaScript 代码会输出到 `build` 目录中。

<!-- When Vite is configured, this command also compiles the frontend assets using Vite and writes the output to the `build/public` folder. -->

当配置了 Vite，这个命令还会使用 Vite 编译前端资源，编译后的前端资源会输出到 `build/public` 目录中。

你也可以参考： [TypeScript 构建过程](/guide/typeScript-build-process/).

```sh
node ace build
```

<!-- ## Configuring the development environment -->
## 配置开发环境

<!-- While AdonisJS takes care of building the end-user applications, you may need additional tools to enjoy the development process and have consistency in your coding style. -->

虽然 AdonisJS 最终是负责构建面向用户的应用程序，但你可能也需要额外的工具来享受开发过程，并可以保持编码风格的一致性。

<!-- We strongly recommend you use **[ESLint](https://eslint.org/)** to lint your code and use **[Prettier](https://prettier.io)** to re-format your code for consistency. -->

我们强烈推荐你已使用 **[ESLint](https://eslint.org/)** 来整理你的代码，使用 **[Prettier](https://prettier.io)** 格式化你的代码，来保持代码整洁。

<!-- The official starter kits come pre-configured with both ESLint and Prettier and use the opinionated presets from the AdonisJS core team. You can learn more about them in the [Tooling config](../fundamentals/tooling_config.md) section of the docs. -->

官方提供的初始化模板使用了 ESLint 和 Prettier 来预处理项目，并且使用了 AdonisJS 核心团队的固执己见的预先配置。你可以在 [工具配置](/guide/tooling-config/) 里查看更多。

<!-- Finally, we recommend you install ESLint and Prettier plugins for your code editor so that you have a tighter feedback loop during the application development. Also, you can use the following commands to `lint` and `format` your code from the command line. -->

最后，我们推荐你为你的代码编辑器安装 ESLint 和 Prettier，以便在应用程序开发过程中有一个更紧密的反馈循环。此外，你也可以使用下面的命令在命令行中执行代码整理和格式化。

```sh
# 运行 ESLint
npm run lint

# 运行 ESLint 并且自动修复问题
npm run lint -- --fix

# 运行 prettier
npm run format
```

<!-- ## VSCode extensions -->
## VSCode 扩展
<!-- You can develop an AdonisJS application on any code editor supporting TypeScript. However, we have developed several extensions for VSCode to enhance the development experience further.

- [**AdonisJS**](https://marketplace.visualstudio.com/items?itemName=jripouteau.adonis-vscode-extension) - View application routes, run ace commands, migrate the database, and read documentation directly from your code editor.

- [**Edge**](https://marketplace.visualstudio.com/items?itemName=AdonisJS.vscode-edge) - Supercharge your development workflow with support for syntax highlighting, autocompletion, and code snippets.

- [**Japa**](https://marketplace.visualstudio.com/items?itemName=jripouteau.japa-vscode) - Run tests without leaving your code editor using Keyboard shortcuts or run them directly from the activity sidebar. -->


你可以使用任何支持 TypeScript 的代码编辑器来开发一个 AdonisJS 应用。然而，我们开发了一系列的 VSCode 扩展，以进一步提升开发体验。

- [**AdonisJS**](https://marketplace.visualstudio.com/items?itemName=jripouteau.adonis-vscode-extension) - 查看应用路由，运行 ace 命令，迁移数据库，在编辑器中直接阅读文档。


- [**Edge**](https://marketplace.visualstudio.com/items?itemName=AdonisJS.vscode-edge) - 在语法高亮、自动补全和代码块上极大提升你的开发体验。


- [**Japa**](https://marketplace.visualstudio.com/items?itemName=jripouteau.japa-vscode) - 不用离开代码编辑器，使用快捷键或是从侧边栏中直接运行测试。