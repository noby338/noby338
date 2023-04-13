import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.759ff6f5.js";const e={},p=t(`<h2 id="异常体系" tabindex="-1"><a class="header-anchor" href="#异常体系" aria-hidden="true">#</a> 异常体系</h2><p><img src="https://markdown-1308523627.cos.ap-chengdu.myqcloud.com/typora/image-20220217102836068.png" alt="image-20220217102836068"></p><ul><li>定义：Java的异常体系提供了一种机制，使得程序可以在遇到错误或异常时进行相应的处理，保证程序的稳定性和可靠性。程序员可以通过try-catch-finally语句来捕获和处理异常，以及通过throw和throws语句来抛出异常和声明方法可能会抛出的异常。</li><li>Error是指在程序运行期间发生的不可恢复的系统错误。当程序出现Error时，通常无法处理，只能让程序终止运行。 <ul><li>OutOfMemoryError: Java堆空间溢出</li><li>NoSuchMethodError: 未找到方法</li><li>NoClassDefFoundError: 找不到类定义</li><li>ExceptionInInitializerError: 静态初始化块引发的异常</li><li>LinkageError: 连接错误。</li></ul></li><li>Exception是指在程序运行期间发生的可恢复的异常，例如输入错误、网络连接中断等。Exception包括两种类型： <ul><li>Checked Exception在代码中需要进行异常处理，否则会编译错误。 <ul><li>IOException: 输入/输出异常</li><li>ClassNotFoundException: 找不到类异常</li><li>SQLException: SQL异常</li><li>ParseException: 解析异常</li><li>InterruptedException: 中断异常。</li></ul></li><li>Runtime Exception通常是由于程序代码逻辑错误造成的，例如数组越界、空指针引用等。Runtime Exception可以不进行异常处理，但如果不处理，程序会在运行时抛出异常并终止运行。 <ul><li>NullPointerException: 空指针异常</li><li>ArrayIndexOutOfBoundsException: 数组下标越界异常</li><li>IllegalArgumentException: 非法参数异常</li><li>ClassCastException: 类型转换异常</li><li>ArithmeticException: 算术异常。</li></ul></li></ul></li></ul><h3 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> Exception</h3><ul><li>在Java中，可以在方法声明中使用throws关键字来声明该方法可能抛出的异常。但是，并不是所有情况下都需要使用throws关键字来声明异常。以下情况下可以省略throws关键字（但是在实际开发中建议尽可能使用throws关键字声明可能抛出的异常，以便提高代码的可读性和可维护性。）： <ul><li>方法声明的异常类型为RuntimeException或其子类，这些异常通常被称为非受检异常，不需要在方法声明中使用throws关键字声明。</li><li>方法不会抛出任何异常，或者方法中的异常已经被处理或转化为非受检异常，这种情况下也可以省略throws关键字。</li><li>方法重写父类方法时，可以不使用throws关键字声明与父类方法相同的异常，但是如果方法声明了父类方法没有声明的异常，则需要使用throws关键字声明这些异常。</li><li>接口方法不能声明任何异常，因此在实现接口方法时不需要使用throws关键字声明异常。</li></ul></li></ul><ul><li>运行时异常通常是由程序逻辑错误引起的，例如空指针异常、数组越界异常等。这些异常通常发生在程序运行时，而不是在编译时。由于这些异常在程序运行时才会被抛出，因此在方法声明中使用throws关键字声明这些异常并不能提高代码的安全性，反而会增加代码的冗余性和复杂性。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">note</span><span class="token punctuation">;</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 异常的基本使用  
 * @Author Noby  
 * @Date 2023/3/18 17:44  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExceptionNote</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">//region 对于直接发生在main中且没有try catch的处理，会直接交给将异常抛给jvm，jvm会终止程序。如果异常经过try catch，将会继续运行程序  </span>
<span class="token comment">//        System.out.println(100 / 0);  </span>
        <span class="token comment">//endregion        //region ArithmeticException 数学运算异常  </span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token comment">//如果程序发生异常且没有被处理，将会将异常抛给jvm，jvm会终止程序  </span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发生异常后，try中的异常代码后的代码不执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//当一个try catch中存在多个catch时，执行其中一个catch后其他catch就不会继续执行  </span>
            <span class="token comment">//catch中写出处理异常的方式  </span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//printStacktrace() 将异常信息打印出来  </span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//多个catch捕获多个异常，且子类异常在前,可以捕获Exception及其子类的异常  </span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是一个Exception异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finally中的代码不管异常是否发生都要执行的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region NullPointerException 空指针异常 ArrayIndexOutOfBoundsException 越界异常  </span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  
        <span class="token keyword">try</span> <span class="token punctuation">{</span>  
            <span class="token function">method</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NullPointerException</span> <span class="token operator">|</span> <span class="token class-name">ArrayIndexOutOfBoundsException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//处理空指针异常和越界异常的方式，打印  </span>
        <span class="token punctuation">}</span>  
  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region ClassCastException 类型转换异常  </span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>  
            <span class="token class-name">A</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token class-name">B</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">)</span> b<span class="token punctuation">;</span>  
            <span class="token class-name">C</span> b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">)</span> b<span class="token punctuation">;</span><span class="token comment">//ClassCastException 类型转换异常 b为B类型不能强转为C  </span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassCastException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token comment">//endregion  </span>
  
  
    <span class="token punctuation">}</span>  
  
    <span class="token doc-comment comment">/**  
     * 异常的抛出和传递  
     * 发生异常时，可通过throw抛出到方法的调用者（对于需要抛出的异常，需要在方法定义时给予声明），也可通过try catch处理异常  
     * 对于运行时异常，在程序运行时才会被抛出，因此在方法声明中使用throws关键字声明这些异常并不能提高代码的安全性，反而会增加代码的冗余性和复杂性。可以在方法中省略运行时异常的声明。  
     * 编译时异常不可省略异常的声明  
     * <span class="token keyword">@param</span> <span class="token parameter">arr</span>  
     * <span class="token keyword">@param</span> <span class="token parameter">i</span>  
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span>  
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ArrayIndexOutOfBoundsException</span></span>  
     */</span>    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">{</span><span class="token comment">//声明可能产生的异常，运行时异常可以省略抛出  </span>
        <span class="token comment">//region throw 搭配 if-else 语句可用于异常的手动抛出。对于系统自带的异常，可以自动抛出（即只需在方法声明即可，出现异常自动抛出）  </span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token string">&quot;自定义信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//抛出一个空指针异常对象，并显示自定义提示信息，抛出异常表示让方法调用者处理  </span>
        <span class="token punctuation">}</span>  
        <span class="token comment">//这里的索引越界为系统异常，可省略抛出（上面的NullPointerException也可省略）  </span>
<span class="token comment">//        else if (arr.length - 1 &lt; i || i &lt; 0) {  </span>
<span class="token comment">//            throw new ArrayIndexOutOfBoundsException(&quot;手动抛出&quot;);//异常的创建用throw，异常的声明用throws  </span>
<span class="token comment">//        }  </span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token comment">//endregion  </span>
  
        <span class="token comment">//region try-catch语句用于异常的处理  </span>
<span class="token comment">//        try {  </span>
<span class="token comment">//            System.out.println(arr[i]);  </span>
<span class="token comment">//        } catch (NullPointerException e) {  </span>
<span class="token comment">//            e.printStackTrace();  </span>
<span class="token comment">//        } catch (ArrayIndexOutOfBoundsException e) {  </span>
<span class="token comment">//            e.printStackTrace();  </span>
<span class="token comment">//        }  </span>
        <span class="token comment">//endregion    }  </span>
<span class="token punctuation">}</span>  
  
  
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>  
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 异常在两个重写方法中的关系  
 * 重写方法的异常范围小于等于被重写方法  
 * @Author Noby  
 * @Date 2023/3/18 17:45  
 */</span><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NullPointerException</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 类型转换异常  
 * @Author Noby  
 * @Date 2023/3/18 18:36  
 */</span><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">note</span><span class="token punctuation">;</span>  
<span class="token doc-comment comment">/**  
 * @Description 自定义异常的使用  
 * 自定义异常必须手动抛出，自动抛出的异常必须为系统自带的  
 * 主动抛出：异常通过throw关键字被手动抛出  
 * 被动抛出：程序中没有通过throw关键字自动抛出  
 * @Author Noby  
 * @Date 2023/3/18 18:40  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomExceptionNote</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">try</span> <span class="token punctuation">{</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//自动抛出异常  </span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
  
        <span class="token keyword">try</span> <span class="token punctuation">{</span>  
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyThrowable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//主动抛出异常(自定义异常只能通过主动抛出)  </span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> myThrowable<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            myThrowable<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token doc-comment comment">/**  
 * @Description 自定义异常  
 * @Author Noby  
 * @Date 2023/3/18 19:47  
 */</span><span class="token keyword">class</span> <span class="token class-name">MyThrowable</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span><span class="token comment">//继承Exception的自定义异常，常用该方法定义自定义异常  </span>
    <span class="token keyword">public</span> <span class="token class-name">MyThrowable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;自定义异常1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用Exception的构造方法，传入的参数为异常的打印信息  </span>
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token class-name">MyThrowable</span><span class="token punctuation">(</span><span class="token class-name">String</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","day17 异常.html.vue"]]);export{k as default};
