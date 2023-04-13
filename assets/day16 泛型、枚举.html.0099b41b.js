import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.759ff6f5.js";const p={},e=t(`<h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><ul><li>定义：泛型是Java中的一种特性，它允许在编写代码时使用类型参数来代替具体的类型，从而使代码更加通用和灵活。通过使用泛型，可以编写可重用的代码，同时还可以提高代码的类型安全性和可读性。</li><li>在Java中，泛型可以应用于类、接口、方法等，通过使用泛型，可以将类型参数传递给这些结构，从而使它们能够处理不同类型的数据。例如，可以定义一个泛型类来表示一个列表，这个列表可以存储任意类型的数据。</li><li>使用泛型可以带来多种好处，包括： <ul><li>提高代码的可读性和可维护性：使用泛型可以使代码更加通用和灵活，从而使代码更易于理解和修改。</li><li>增加代码的类型安全性：使用泛型可以避免在运行时出现类型转换异常等问题，从而提高代码的健壮性。</li><li>提高代码的性能：使用泛型可以避免使用Object类型来存储数据，从而减少了类型转换的开销，提高了代码的执行效率。</li></ul></li><li>泛型为一种语法糖 <ul><li>语法糖：指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。</li></ul></li><li>泛型的注意事项 <ul><li>泛型只能是引用数据类型，不能写基本数据类型</li><li>实例化泛型是的语法，前面的泛型的数据类型要和后面的泛型的数据类型匹配，后面的箭头可以省略不写 <ul><li><code>ArrayList&lt;String&gt; al1 = new ArrayList&lt;String&gt;();</code></li><li><code>ArrayList&lt;String&gt; al2 = new ArrayList&lt;&gt;();</code></li><li><code>ArrayList&lt;String&gt; al3 = new ArrayList();</code></li></ul></li></ul></li><li>常用的泛型字母：K-key键、T-type类型、V-value值、E-enumeration枚举、E-element元素</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">note<span class="token punctuation">.</span>generic</span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型的基本使用  
 * @Author Noby  
 * @Date 2023/3/17 21:51  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericNote</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  
        <span class="token comment">//region 泛型类：使用了泛型的类  </span>
        <span class="token class-name">GenericClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringGenericClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        stringGenericClass<span class="token punctuation">.</span><span class="token function">setVar</span><span class="token punctuation">(</span><span class="token string">&quot;noby&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;stringGenericClass.getVar() = &quot;</span> <span class="token operator">+</span> stringGenericClass<span class="token punctuation">.</span><span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region 泛型接口的实现类：接口泛型已定义  </span>
        <span class="token keyword">new</span> <span class="token class-name">GenericInterfaceImpl1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">methodInterface</span><span class="token punctuation">(</span><span class="token string">&quot;noby&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region 泛型接口的实现类：接口泛型未定义  </span>
        <span class="token keyword">new</span> <span class="token class-name">GenericInterfaceImpl2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">methodInterface</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
  
        <span class="token comment">//region 泛型方法：使用了该类没有声明的泛型的方法  </span>
        <span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;tow&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region 泛型通配符  </span>
        <span class="token comment">/*  
        ? 泛型通配符：表示该类型可以是任何数据类型  
       泛型通配符最常用的就是放在形参上接收不同类型的泛型对象  
         */</span>        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> objects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token function">method</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token function">method0</span><span class="token punctuation">(</span>objects<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/**  
     * 泛型运用在方法上时，如果所使用的泛型没有在类中声明，则需要在方法中声明  
     * 声明在返回值之前  
     *  
     * <span class="token keyword">@param</span> <span class="token parameter">param</span>  
     * <span class="token keyword">@param</span> <span class="token parameter">param2</span>  
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">&gt;</span></span>  
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">&gt;</span></span>  
     */</span>  
    <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">T1</span> param<span class="token punctuation">,</span> <span class="token class-name">T2</span> param2<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>param <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> param2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method0</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//Object并不是表示任意数据类型，而是只表示Object  </span>
  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//可以存储任意数据类型  </span>
  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型运用在类上时，声明在类名之后  
 * 如果某泛型已经在类中声明，则不需要在方法中额外声明，否则需在方法中额外声明  
 * @Author Noby  
 * @Date 2023/3/18 1:13  
 */</span><span class="token keyword">class</span> <span class="token class-name">GenericClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token comment">//定义一个泛型类  </span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token keyword">var</span><span class="token punctuation">;</span>  
  
    <span class="token keyword">public</span> <span class="token class-name">GenericClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token class-name">GenericClass</span><span class="token punctuation">(</span><span class="token class-name">E</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span> <span class="token operator">=</span> <span class="token keyword">var</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">getVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">var</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVar</span><span class="token punctuation">(</span><span class="token class-name">E</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">var</span> <span class="token operator">=</span> <span class="token keyword">var</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型运用在接口中  
 * @Author Noby  
 * @Date 2023/3/18 1:15  
 */</span><span class="token keyword">interface</span> <span class="token class-name">GenericInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>  
    <span class="token keyword">void</span> <span class="token function">methodInterface</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型运用在接口的实现类中，方式1，定义好接口的泛型  
 * @Author Noby  
 * @Date 2023/3/18 1:15  
 */</span><span class="token keyword">class</span> <span class="token class-name">GenericInterfaceImpl1</span> <span class="token keyword">implements</span> <span class="token class-name">GenericInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token comment">//定义实现类的泛型的类型为字符串  </span>
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodInterface</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实现类1的方法执行&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型运用在接口的实现类中，方式2，实例化实现类时定义泛型的类型  
 * @Author Noby  
 * @Date 2023/3/18 1:16  
 */</span><span class="token keyword">class</span> <span class="token class-name">GenericInterfaceImpl2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">GenericInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token comment">//实现类的泛型由创建对象时定义  </span>
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodInterface</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实现类2的方法执行&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型擦除" tabindex="-1"><a class="header-anchor" href="#类型擦除" aria-hidden="true">#</a> 类型擦除</h3><p>Java的泛型基本上都是在编译器这个层次上实现的，在生成的字节码中是不包含泛型中的类型信息的，使用泛型的时候加上类型参数，在编译器编译的时候会去掉，这个过程成为类型擦除（泛型擦除）。</p><p>所以JVM并不知道泛型的存在，因为泛型在编译阶段就已经被处理成普通的类和方法； 处理机制是通过类型擦除，擦除规则：</p><ul><li>若泛型类型没有指定具体类型，用Object作为原始类型；</li><li>若有限定类型&lt; T exnteds XClass &gt;，使用XClass作为原始类型；</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">note<span class="token punctuation">.</span>generic</span><span class="token punctuation">;</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型的类型擦除  
 * @Author Noby  
 * @Date 2023/3/18 0:54  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TypeErasureNote</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">Student</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>  
    <span class="token class-name">T</span> data<span class="token punctuation">;</span>  
    <span class="token comment">/*  
     编译器在处理泛型时，将带有泛型的语句进行翻译，之后得到的类型是：  
     class Student {        Object data;     }     jvm(虚拟机)并不识别泛型，只运行编译器翻译后得到的字节码文件  
     */</span><span class="token punctuation">}</span>  
  
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token comment">//泛型通配符是写在方法参数列表里面用于限制参数的类型范围，这里非泛型通配符  </span>
    <span class="token class-name">T</span> data<span class="token punctuation">;</span>  
    <span class="token comment">/*  
     编译器在处理泛型时，将带有泛型的语句进行翻译，之后得到的类型是：  
     class Person {        Number data;     }     
     */</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型通配符" tabindex="-1"><a class="header-anchor" href="#泛型通配符" aria-hidden="true">#</a> 泛型通配符</h2><ul><li>定义：用于表示类型参数的占位符，用“?”来表示。通配符可以用于限制泛型类型的范围，包括限制类型参数的上界或下界。 <ul><li>无界通配符：使用不带任何限定符的 ?，表示类型参数可以是任何类型，相当于是所有类型的子类。例如：<code>List&lt;?&gt;</code> 表示可以是任何类型的 List。</li><li>上界通配符：使用 extends 关键字，表示类型参数必须是指定类型的子类。例如：<code>List&lt;? extends Number&gt;</code> 表示可以是 Integer、Double、Float 等 Number 的子类。</li><li>下界通配符：使用 super 关键字，表示类型参数必须是指定类型的父类。例如：<code>List&lt;? super String&gt;</code>表示可以是String的父类。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">note<span class="token punctuation">.</span>generic</span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 泛型通配符的基本使用  
 * 通配符可以用于限制泛型类型的范围  
 * @Author Noby  
 * @Date 2023/3/17  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericWildcardNote</span> <span class="token punctuation">{</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//region 无界通配符  </span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> intList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        intList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        intList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        intList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token function">printList</span><span class="token punctuation">(</span>intList<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        strList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        strList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        strList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token function">printList</span><span class="token punctuation">(</span>strList<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region 上界通配符  </span>
<span class="token comment">//        method1(strList);  </span>
        <span class="token function">method1</span><span class="token punctuation">(</span>intList<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region 下界通配符  </span>
        <span class="token function">method2</span><span class="token punctuation">(</span>strList<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//endregion  </span>
  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/**  
     * 无界通配符  
     * 定义一个打印集合参数的方法  
     *  
     * <span class="token keyword">@param</span> <span class="token parameter">list</span>  
     */</span>  
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>o <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
  
    <span class="token doc-comment comment">/**  
     * 上界通配符  
     * 可以存储number及其子类的数据类型  
     *  
     * <span class="token keyword">@param</span> <span class="token parameter">list</span>  
     */</span>  
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/**  
     * 下界通配符  
     * 可以存储String及其父类的数据类型  
     *  
     * <span class="token keyword">@param</span> <span class="token parameter">list</span>  
     */</span>  
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举enumerate" tabindex="-1"><a class="header-anchor" href="#枚举enumerate" aria-hidden="true">#</a> 枚举enumerate</h3><ul><li>一种特殊的单例，枚举是指对象有多个，一般为规定的数量</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">demo<span class="token punctuation">.</span>enumerate</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnumDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Week00</span> mon <span class="token operator">=</span> <span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token constant">MON</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week00</span> tue <span class="token operator">=</span> <span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token constant">TUE</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week00</span> wed <span class="token operator">=</span> <span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token constant">WED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wed<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week01</span> mon1 <span class="token operator">=</span> <span class="token class-name">Week01</span><span class="token punctuation">.</span><span class="token constant">MON</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week01</span> tue1 <span class="token operator">=</span> <span class="token class-name">Week01</span><span class="token punctuation">.</span><span class="token constant">TUE</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week01</span> wed1 <span class="token operator">=</span> <span class="token class-name">Week01</span><span class="token punctuation">.</span><span class="token constant">WED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wed1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week02</span> mon2 <span class="token operator">=</span> <span class="token class-name">Week02</span><span class="token punctuation">.</span><span class="token constant">MON</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mon2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week02</span> tue2 <span class="token operator">=</span> <span class="token class-name">Week02</span><span class="token punctuation">.</span><span class="token constant">TUE</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tue2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tue2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Week02</span> wed2 <span class="token operator">=</span> <span class="token class-name">Week02</span><span class="token punctuation">.</span><span class="token constant">WED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wed2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        wed2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ff
        <span class="token comment">//region 枚举常用方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;枚举常用方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon2<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>wed2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//WED相对MON的位置</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//枚举项的名称</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mon<span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//枚举项的位置</span>
        <span class="token class-name">Week00</span> mon3 <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;MON&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到枚举项的对象</span>
        <span class="token class-name">Week00</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到枚举项数组[MON,TUE,WND]</span>
        <span class="token class-name">Week00</span> mon4 <span class="token operator">=</span> <span class="token class-name">Week00</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;MON&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到枚举项的对象</span>
        <span class="token comment">//endregion</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">//region 枚举的定义</span>
<span class="token keyword">enum</span> <span class="token class-name">Week00</span> <span class="token punctuation">{</span>
    <span class="token constant">MON</span><span class="token punctuation">,</span><span class="token constant">TUE</span><span class="token punctuation">,</span><span class="token constant">WED</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> <span class="token class-name">Week01</span> <span class="token punctuation">{</span>
    <span class="token function">MON</span><span class="token punctuation">(</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">TUE</span><span class="token punctuation">(</span><span class="token string">&quot;星期二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">WED</span><span class="token punctuation">(</span><span class="token string">&quot;星期三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Week01</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> getName <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">Week02</span> <span class="token punctuation">{</span>
    <span class="token function">MON</span><span class="token punctuation">(</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;：星期一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token comment">//成员内部类</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token function">TUE</span><span class="token punctuation">(</span><span class="token string">&quot;星期二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;：星期二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token function">WED</span><span class="token punctuation">(</span><span class="token string">&quot;星期三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;：星期三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Week02</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> getName <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//endregion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","day16 泛型、枚举.html.vue"]]);export{d as default};
