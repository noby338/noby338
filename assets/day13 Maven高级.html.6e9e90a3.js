import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as t}from"./app.759ff6f5.js";const l={},p=t(`<h2 id="分模块开发" tabindex="-1"><a class="header-anchor" href="#分模块开发" aria-hidden="true">#</a> 分模块开发</h2><ul><li>Web 项目的分模块开发 <ul><li>每个模块中仅包含当前模块对应的功能类与配置文件</li><li>spring 核心配置根据模块功能不同进行独立制作</li><li>当前模块所依赖的模块通过导入坐标的形式加入当前模块后才可以使用(需将依赖的模块安装在本地仓库)</li><li>web.xml 需要加载所有的 spring 核心配置文件</li></ul></li></ul><h2 id="继承和聚合" tabindex="-1"><a class="header-anchor" href="#继承和聚合" aria-hidden="true">#</a> 继承和聚合</h2><ul><li>Maven 中的继承和聚合是两个常用的机制，用于管理多个 Maven 项目的依赖关系和构建过程。它们分别适用于不同的场景： <ol><li>继承机制：Maven 中的继承机制允许在不同的 Maven 项目之间共享相同的配置信息。一个 Maven 项目可以通过继承来获得另一个项目的通用配置信息，例如构建插件、依赖关系、构建文件等。继承机制使得我们可以将通用的配置信息提取到一个父项目中，并在子项目中继承这些信息，以减少冗余的配置，提高项目的可维护性。</li><li>聚合机制：Maven 中的聚合机制允许将多个相关的 Maven 项目组合成一个大的构建单元。聚合机制使得我们可以通过一个父项目来管理多个子项目，从而简化项目的构建和管理。父项目可以定义一些通用的配置信息，并将这些信息传递给子项目，同时子项目也可以定义自己的配置信息和依赖关系。在构建时，可以在父项目中执行聚合构建，从而同时构建多个子项目，保证它们的相互依赖关系和一致性。</li></ol></li><li>继承机制和聚合机制通常是同时使用的。我们可以将多个子项目组合在一个父项目中，然后在每个子项目中继承父项目的通用配置信息。这样，父项目可以提供一些通用的配置信息和依赖关系，而子项目可以根据自己的特殊需求进行定制。同时，在聚合构建时，可以通过父项目来统一管理所有的子项目，以确保它们之间的一致性和相互依赖关系。</li><li>作用 <ul><li>聚合：用于快速构建 maven 工程，一次性构建多个项目/模块。 <ul><li>注意事项：参与聚合操作的模块最终执行顺序与模块间的依赖关系有关，与配置顺序无关</li></ul></li><li>继承：通过继承可以实现在子工程中沿用父工程中的配置。</li></ul></li><li>配置方式 <ul><li>继承 <ul><li>父项目 <ul><li><code>&lt;dependencyManagement&gt;</code>版本锁定:不会真正添加依赖，规定后面引入依赖时使用的版本，子项目使用该依赖时就可省略版本的指定，当子项目的版本与该规定不同时，使用子项目的版本</li></ul></li><li>子项目 <ul><li>子项目坐标的 <code> &lt;groupId&gt;</code> <code>&lt;version&gt;</code> 都继承自父项目 只需要配置子项目的 <code>&lt;artifactId&gt;</code></li><li>使用 parent 标签指定当前项目的父项目<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>priv.noby<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>a01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">&gt;</span></span>../mavenssm/pom.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>relativePath</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li>聚合 <ul><li>父模块 <ul><li>打包方式<code>&lt;packaging&gt;pom&lt;/packaging&gt;</code></li><li>指定当前聚合模块中的子模块：<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>../b02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>子模块 <ul><li>无需指明</li></ul></li></ul></li></ul></li><li>异同： <ul><li>相同点： <ul><li>聚合与继承的 pom.xml 文件打包方式均为 pom,可以将两种关系制作到同一个 pom 文件中聚合与继承均属于设计型模块，并无实际的模块内容</li></ul></li><li>不同点： <ul><li>聚合用于快速构建项目；继承用于快速配置</li><li>聚合是在父模块中配置关系，父模块可以感知到参与聚合的模块有哪些；继承是在子模块中配置关系，父模块无法感知哪些子模块继承了自己</li><li>聚合其子模块不会继承父模块，父模块打包，所有的子模块都会打包，子模块不会继承父模块引入的坐标；继承父项目打包，子项目不打包，子项目会继承父项目已经引入的坐标；</li><li>聚合的应用场景为分布式项目；继承其应用场景为 SpringBoot 项目</li></ul></li></ul></li></ul><h2 id="maven-的属性" tabindex="-1"><a class="header-anchor" href="#maven-的属性" aria-hidden="true">#</a> maven 的属性</h2><ul><li>maven 的属性(maven 中的变量) <ul><li>自定义属性 <ul><li>父项目中定义(spring.version 为键，5.2.15.RELEASE 为值)</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring.version</span><span class="token punctuation">&gt;</span></span>5.2.15.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>内置属性 <ul><li>例如：\${project.version}可引用本项目的 version</li></ul></li><li>Setting 属性</li><li>Java 系统属性</li><li>环境变量属性</li></ul></li></ul><h2 id="项目的版本" tabindex="-1"><a class="header-anchor" href="#项目的版本" aria-hidden="true">#</a> 项目的版本</h2><ul><li>项目的工程版本 <ul><li>分类 <ul><li>SNAPSHOT(快照版本) <ul><li>项目开发过程中，为方便团队成员合作，解决模块间相互依赖和实时更新的问题，开发者对每个模块进行构建的时候，输出的临时性版本叫快照版本（测试阶段版本）</li><li>快照版本会随着开发的进展不断更新</li></ul></li><li>RELEASE(发布版本) <ul><li>项目开发到进入阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的，即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本</li></ul></li></ul></li><li>版本号约定 <ul><li>约定规范： <ul><li><code>&lt;主版本&gt;.&lt;次版本&gt;.&lt;增量版本&gt;.&lt;里程碑版本&gt;</code></li><li>主版本：表示项目重大架构的变更，如：spring5 相较于 spring4 的迭代</li><li>次版本：表示有较大的功能增加和变化，或者全面系统地修复漏洞</li><li>增量版本：表示有重大漏洞的修复</li><li>里程碑版本：表明一个版本的里程碑（版本内部）。这样的版本同下一个正式版本相比，相对来说不是很稳定，有待更多的测试</li></ul></li><li>范例： <ul><li>5.1.9.RELEASE</li></ul></li></ul></li></ul></li></ul><h2 id="maven-对配置文件的统一管理" tabindex="-1"><a class="header-anchor" href="#maven-对配置文件的统一管理" aria-hidden="true">#</a> maven 对配置文件的统一管理</h2><ul><li>配置文件中读取 pom 属性值(maven 统一管理其他所有的配置文件) <ol><li>在 pom 文件中设定配置文件路径<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>开启加载 pom 属性过滤功能</li><li>pom 中定义该属性<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://127.0.0.1:3306/test(install该项目后查看jar中的db.properties是否为该值)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>其他配置文件中使用\${属性名}格式引用 pom 属性</li></ol></li><li>多环境开发配置 <ol><li>配置多环境(配置文件中读取 pom 属性值中的步骤 3 换为以下标签代替)<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>pro_env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://127.1.1.1:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>dep_env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://127.2.2.2:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>执行构建命令并指定加载对应环境配置信息 <ul><li>方式 1：使用命令行 mvn install –P pro_env</li><li>方式 2：利用 idea ，运行的配置中，配置文件直接选择 pro_env</li></ul></li></ol></li></ul>`,10),e=[p];function i(c,o){return a(),s("div",null,e)}const g=n(l,[["render",i],["__file","day13 Maven高级.html.vue"]]);export{g as default};
