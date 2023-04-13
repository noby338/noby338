import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,e as a}from"./app.759ff6f5.js";const e={},i=a(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>JSP、EL（Expression Language）、JSTL（JavaServer Pages Standard Tag Library）是 Java Web 应用程序中常用的三种技术，它们的关系如下： <ol><li>JSP 是一种动态网页技术，它允许在 HTML 页面中嵌入 Java 代码，以便在 Web 服务器上动态生成页面内容。</li><li>EL 是一种表达式语言，它可以在 JSP 页面中直接访问 Java 对象和变量，以便更方便地处理数据和执行业务逻辑。</li><li>JSTL 是一种标签库，它提供了一组常用的自定义标签，可以在 JSP 页面中使用，以便更方便地处理数据和控制页面输出。</li></ol></li><li>在 Java Web 应用程序中，通常会同时使用 JSP、EL 和 JSTL 这三种技术，以便更方便地完成 Web 应用程序的开发和维护。具体来说，JSP 页面可以使用 EL 表达式访问 Java 对象和变量，以便更方便地显示和处理数据；同时，JSTL 标签库可以使用 EL 表达式作为参数，以便更方便地控制标签的行为和输出结果。综合使用 JSP、EL 和 JSTL 这三种技术，可以大大提高 Java Web 应用程序的开发效率和维护性。</li></ul><ul><li>注释区别 <ul><li>HTML 注释 <code>&lt;!-- HTML注释，静态资源，浏览器显示 --&gt;</code></li><li>JSP 注释 <code>&lt;%-- JSP注释，动态资源，浏览器不显示 --%&gt;</code></li></ul></li><li>JSP 的组成 <ul><li>静态资源 <ul><li>html</li></ul></li><li>Java 脚本 <ul><li>Java 脚本 <code>&lt;% 逻辑代码 %&gt;</code></li><li>表达式 <code>&lt;%=输出 %&gt;</code></li><li>声明 <code>&lt;%! 类中的代码 %&gt;</code></li></ul></li><li>JSP 标签: <ul><li>动作 <ul><li><code>&lt;jsp:include page=&quot;/footer.jsp&quot;/&gt;</code></li></ul></li><li>指令 <ul><li><code>&lt;%@指令名 属性=&quot;属性值&quot;%&gt;</code></li></ul></li></ul></li></ul></li><li>EL <ul><li>用于简化输出操作</li><li>el 函数库需要导入<code>/jstl/function</code>标签库</li></ul></li><li>JSTL <ul><li>用于逻辑代码的书写</li><li>jstl 需要导入<code>/jstl/core</code>标签库</li></ul></li></ul><h2 id="jsp" tabindex="-1"><a class="header-anchor" href="#jsp" aria-hidden="true">#</a> Jsp</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;java.util.Date&quot; %&gt;&lt;%-- &lt;%@ %&gt;表示指令，引入java的包 --%&gt;&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; pageEncoding=&quot;UTF-8&quot;
         language=&quot;java&quot; errorPage=&quot;ExceptionNote.jsp&quot; %&gt;&lt;%--该jsp的页面编码解码格式为utf-8，支持的脚本语言为java--%&gt;
&lt;%--errorPage=&quot;ExceptionNote.jsp&quot;表示异常后跳转的页面--%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JspNote&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;%--动作,在jsp中引入其他页面，路径为服务器路径，同步方式--%&gt;
&lt;%--&lt;jsp:include page=&quot;/HeaderAndFooterServlet?method=getHeader&quot;/&gt;--%&gt;
&lt;%--动作,在jsp中引入其他页面，路径为服务器路径，异步方式--%&gt;
&lt;jsp:include page=&quot;/footer.jsp&quot;/&gt;
&lt;br&gt;

&lt;%--jsp本质上为一个servlet类，其java源代码位于target\\tomcat\\work\\Tomcat\\localhost\\jsp\\org\\apache\\jsp\\JspNote_jsp.java--%&gt;

&lt;%--java脚本，里面存放java代码（java方法中的代码书写方式）--%&gt;
&lt;%
    //java的对象需要使用page指令的import属性导包
    Date date = new Date();
    //response为jsp的内置对象
    response.getWriter().write(String.valueOf(date) + &quot;&lt;br/&gt;&quot;);
    System.out.println(&quot;java对象&quot; + date);

    //region jsp九大内置对象(JSP中特有的域：Page、PageContext)
    //page 就是this
    response.getWriter().write(&quot;page==this:&quot; + (page == this) + &quot;&lt;br/&gt;&quot;);
    //request
    request.setAttribute(&quot;requestAttr&quot;, &quot;request内置对象&quot;);
    //response
    response.getWriter().write(&quot;response内置对象&lt;br/&gt;&quot;);
    //session
    session.setAttribute(&quot;sessionAttr&quot;, &quot;session内置对象&quot;);
    //application ServletContext
    application.setAttribute(&quot;applicationAttr&quot;, &quot;application内置对象&quot;);
    //out JspWriter    字符流
    out.write(&quot;out内置对象&lt;br/&gt;&quot;);
    //config ServletConfig
    out.write(config.getServletName() + &quot;&lt;br/&gt;&quot;);
    //exception
    if (false) {
        throw new RuntimeException(&quot;出现异常&quot;);
    }
    //pageContext 其他的八个jsp内置对象都可以通过pageContext对象操作(只演示了5个)
    // page,request,session,ServletContext 为jsp的域属性
    // request,session,ServletContext 为servlet的域属性
    pageContext.setAttribute(&quot;pageContextAttr&quot;, &quot;pageContext内置对象&quot;);
    pageContext.setAttribute(&quot;pageContextAttr&quot;, &quot;pageContext内置对象 PAGE_SCOPE&quot;, PageContext.PAGE_SCOPE);
    pageContext.setAttribute(&quot;pageContextAttr&quot;, &quot;pageContext内置对象 REQUEST_SCOPE&quot;, PageContext.REQUEST_SCOPE);
    pageContext.setAttribute(&quot;pageContextAttr&quot;, &quot;pageContext内置对象 SESSION_SCOPE&quot;, PageContext.SESSION_SCOPE);
    pageContext.setAttribute(&quot;pageContextAttr&quot;, &quot;pageContext内置对象 APPLICATION_SCOPE&quot;, PageContext.APPLICATION_SCOPE);

    //page和request域可通过该方式调用，page&gt;request的顺序查找
    out.write(pageContext.getAttribute(&quot;pageContextAttr&quot;).toString() + &quot;&lt;br/&gt;&quot;);

    out.write(pageContext.getAttribute(&quot;pageContextAttr&quot;, PageContext.REQUEST_SCOPE).toString() + &quot;&lt;br/&gt;&quot;);
    out.write(pageContext.getAttribute(&quot;pageContextAttr&quot;, PageContext.SESSION_SCOPE).toString() + &quot;&lt;br/&gt;&quot;);
    out.write(pageContext.getAttribute(&quot;pageContextAttr&quot;, PageContext.APPLICATION_SCOPE).toString() + &quot;&lt;br/&gt;&quot;);

    //全域查找，通过 page&gt;pageContext&gt;request&gt;session&gt;application 的顺序查找
    out.write(pageContext.findAttribute(&quot;pageContextAttr&quot;).toString());

%&gt;
&lt;%--声明，相当于该JspNote_jsp类的成员变量与成员方法（java类中的代码书写方式）--%&gt;
&lt;%!
    private static int count = 1;

    public static int getCount() {
        return count++;
    }
%&gt;
&lt;%--表达式，主要用于页面的输出操作--%&gt;
&lt;%=
&quot;&lt;h1&gt;第 &quot; + getCount() + &quot; 次访问页面&lt;/h2&gt;&quot;
%&gt;


&lt;%--静态资源和java脚本嵌套使用--%&gt;
&lt;table&gt;
    &lt;%
        for (int i = 1; i &lt;= 3; i++) {
    %&gt;
    &lt;tr&gt;
        &lt;td&gt;
            &lt;%=&quot;times&quot; + i %&gt;
        &lt;/td&gt;
        &lt;td&gt;
            &lt;%=i %&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
    &lt;%} %&gt;
&lt;/table&gt;

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--这是一个同步的复用页面，需要来自servlet的转发--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;header.jsp&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/bootstrap.min.css&quot;&gt;
    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/popper.min.js&quot;&gt;&lt;/script&gt;&lt;%--用于下拉菜单--%&gt;
    &lt;script src=&quot;js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    \${info}
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--这是一个异步的复用页面，直接调用该页面，无需先接收servlet转发--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;footer&lt;/title&gt;
    &lt;script&gt;
        $(function () {
            $.get(&quot;HeaderAndFooterServlet&quot;,
            {&quot;method&quot;:&quot;getFooter&quot;},
            function (result) {
                $(&quot;#footer&quot;).append(result);
            })
        })
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;div id=&quot;footer&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; isErrorPage=&quot;true&quot; %&gt;&lt;%--错误跳转的目标页面必须使用isErrorPage=&quot;true&quot;属性--%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;这是错误跳转的目标页面&lt;/h1&gt;
&lt;%out.write(exception.getMessage());%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">priv<span class="token punctuation">.</span>noby<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>servlet</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 利用反射实现简化Servlet的书写
 * 所有的Servlet都继承该BaseServlet
 * * @author Noby
 * <span class="token keyword">@since</span> 2023/3/25 16:47
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//响应乱码</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//post请求乱码</span>
        request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取method参数，这个参数决定调用哪个方法</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method<span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//在当前Servlet中查找指定的方法</span>
            method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>methodName <span class="token operator">+</span> <span class="token string">&quot;方法未定义！&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//调用方法，返回字符串</span>
            <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>result<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//获取:下标位置</span>
                <span class="token keyword">int</span> index <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//没有，默认就是转发</span>
                    request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">//start就是:前面的单词</span>
                    <span class="token class-name">String</span> start <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//path就是:后面的路径</span>
                    <span class="token class-name">String</span> path <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// f:开头就转发</span>
                        request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// r:开头就重定向</span>
                        response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">priv<span class="token punctuation">.</span>noby<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>servlet</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 用于页面的复用
 *
 * <span class="token keyword">@author</span> Noby
 * <span class="token keyword">@since</span> 2023/3/25 17:50
 */</span><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/HeaderAndFooterServlet&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeaderAndFooterServlet</span> <span class="token keyword">extends</span> <span class="token class-name">BaseServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;---------这是一个同步的复用页面header----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;f:/header.jsp&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getFooter</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;---------这是一个异步的复用页面footer----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> EL</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--EL表达式主要用于简化JSP中的各种输出操作--%&gt;

&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%--taglib 为引入第三方标签库的指令，prefix为该标签指定别名（在调用时使用），uri为该标签的使用具体规则，使用前必须同时引入jstl--%&gt;
&lt;%@ taglib prefix=&quot;fn&quot; uri=&quot;http://java.sun.com/jsp/jstl/functions&quot; %&gt;
&lt;%--/jstl/core为jstl核心--%&gt;
&lt;%--/jstl/function为el函数库--%&gt;

&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;ELNote&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%--模拟来自servlet的域对象--%&gt;
&lt;%
    request.setAttribute(&quot;info&quot;, &quot;requestInformation&quot;);
    session.setAttribute(&quot;info&quot;, &quot;sessionInformation&quot;);
    application.setAttribute(&quot;info&quot;, &quot;applicationInformation&quot;);
%&gt;
&lt;%--EL的11个内置对象--%&gt;
\${info}&lt;br&gt;&lt;%--全域查找：会按照四大域从小到大查找该属性 注意\${&quot;info&quot;}表示的是输出字符串&quot;info&quot;--%&gt;
\\\${info}表示转译&lt;br&gt;
\${requestScope.info}&lt;br&gt;&lt;%--\${}即为EL的输出方式，等用于jsp中的&lt;%= %&gt;标签}--%&gt;
\${sessionScope.info}&lt;br&gt;
\${applicationScope.info}&lt;br&gt;
&lt;hr&gt;
&lt;%--EL运算符--%&gt;
\${not empty info}
&lt;%--
    /或div
    %或mod
    ==或eq
    !=或ne
    &lt;或lt
    &gt;或gt
    &lt;=或le
    &gt;=或ge
    &amp;&amp;或and
    !或not
    ||或or
    empty--%&gt;

    &lt;hr&gt;
    &lt;%--EL一共11个内置对象。这11个内置对象中有10个是Map类型的，最后一个是pageContext对象--%&gt;
&lt;%--
    pageScope 取page域中的值
    requestScope 取request域中的值
    sessionScope 取session域中的值
    applicationScope 取servletContext域中的值
    \${xxxScope.key} 查找指定域
    \${key} 全域 查找
    param 获取请求参数的值
    paramValues 一个请求参数key有多个值
    header 获取请求头的值
    headerValues 获取请求头的值，一个头名对应多个头值
    initParam 获取SerlvetContext初始化参数
    cookie 获取Cookie的值
    pageContext 获取其它内置对象
--%&gt;


    &lt;a href=&quot;ELNote.jsp&quot;&gt;ELNote.jsp&lt;/a&gt;&lt;br/&gt;
    &lt;%--jsp中不建议直接使用绝对路径--%&gt;
    &lt;a href=&quot;/jsp/ELNote.jsp&quot;&gt;ELNote.jsp&lt;/a&gt;&lt;br/&gt;
    &lt;!-- 绝对路径的灵活写法 --&gt;
    &lt;a href=&quot;&lt;%=request.getContextPath() %&gt;/ELNote.jsp&quot;&gt;ELNote.jsp&lt;/a&gt;&lt;br/&gt;
    &lt;a href=&quot;&lt;%=((HttpServletRequest)pageContext.getRequest()).getContextPath()%&gt;/ELNote.jsp&quot;&gt;ELNote.jsp&lt;/a&gt;
    &lt;a href=&quot;\${pageContext.request.contextPath}/ELNote.jsp&quot;&gt;ELNote.jsp&lt;/a&gt;
    &lt;%--利用jstl--%&gt;
    &lt;a href=&quot;&lt;c:url value=&#39;/ELNote.jsp&#39;/&gt;&quot;&gt;ELNote.jsp&lt;/a&gt;&lt;br/&gt;
    &lt;hr&gt;

    &lt;%--EL函数库（使用前导入jstl的jar包和jsp标签库）--%&gt;
    \${fn:toUpperCase(&quot;java&quot;)}&lt;%--表示使用fn标签中的toUpperCase()方法--%&gt;
&lt;%--
        String toUpperCase(String input)：
        String toLowerCase(String input)：
        int indexOf(String input, String substring)：
        boolean contains(String input, String substring)：
        boolean containsIgnoreCase(String input, String substring)：
        boolean startsWith(String input, String substring)：
        boolean endsWith(String input, String substring)：
        String substring(String input, int beginIndex, int endIndex)：
        String substringAfter(String input, String substring)：
        substringBefore(String input, String substring)：
        String escapeXml(String input)       对标签转义，显示原样字符，不显示标签效果
        String trim(String input)：
        String replace(String input, String substringBefore, String substringAfter)：
        String[] split(String input, String delimiters)：
        int length(Object obj)：
        String join(String array[], String separator)： 拼接
--%&gt;
    &lt;hr&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jstl" tabindex="-1"><a class="header-anchor" href="#jstl" aria-hidden="true">#</a> JSTL</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--JSTL主要用于if条件判断，循环等--%&gt;

&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;%--/jstl/core为jstl核心--%&gt;
&lt;%--/jstl/function为el函数库--%&gt;

&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JSTLNote&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;hr&gt;
&lt;%--通过jstl实现条件判断及循环--%&gt;
&lt;%--模拟来自servlet的request域--%&gt;
&lt;%
    String[] names = {&quot;noby&quot;, &quot;kace&quot;, &quot;july&quot;};
    request.setAttribute(&quot;names&quot;, names);
%&gt;

&lt;%--条件判断语句--%&gt;
&lt;c:if test=&quot;\${not empty names}&quot;&gt;
    &lt;%--增强for循环语句--%&gt;
    &lt;c:forEach var=&quot;name&quot; items=&quot;\${names}&quot;&gt;
        \${name}
    &lt;/c:forEach&gt;
&lt;/c:if&gt;
&lt;hr&gt;

&lt;%--for循环--%&gt;
&lt;c:forEach var=&quot;i&quot; begin=&quot;0&quot; end=&quot;2&quot; step=&quot;1&quot;&gt;
    \${names[i]}
&lt;/c:forEach&gt;

&lt;hr&gt;
&lt;%--赋值语句--%&gt;
&lt;c:set var=&quot;score&quot; value=&quot;56&quot;/&gt;
&lt;%--删除域中属性--%&gt;
&lt;%--&lt;c:remove var=&quot;score&quot; scope=&quot;page&quot;/&gt;--%&gt;
&lt;%--out输出语句--%&gt;
&lt;c:out value=&quot;\${score}&quot;/&gt;&lt;br/&gt;

&lt;hr&gt;
&lt;%--选择语句--%&gt;
&lt;c:choose&gt;
    &lt;c:when test=&quot;\${100 &gt;= score and score &gt; 90}&quot;&gt;优秀&lt;/c:when&gt;
    &lt;c:when test=&quot;\${90 &gt;= score  and score &gt; 70}&quot;&gt;良好&lt;/c:when&gt;
    &lt;c:when test=&quot;\${70 &gt;= score  and score &gt; 60}&quot;&gt;及格&lt;/c:when&gt;
    &lt;c:when test=&quot;\${score &lt; 60 and score &gt;= 0}&quot;&gt;不及格&lt;/c:when&gt;
    &lt;c:otherwise&gt;无效成绩&lt;/c:otherwise&gt;
&lt;/c:choose&gt;

&lt;hr&gt;
&lt;%--c:url路径--%&gt;
&lt;a href=&quot;&lt;c:url value=&#39;/JSTLNote.jsp&#39;/&gt;&quot;&gt;JSTLNote.jsp&lt;/a&gt;&lt;br/&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[i];function o(p,c){return s(),t("div",null,l)}const r=n(e,[["render",o],["__file","day08 JSP、EL、JSTL.html.vue"]]);export{r as default};
