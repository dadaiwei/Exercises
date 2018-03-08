前端小练习
=================
><font size=5>**前端起步的7个task,帮助你从html、css起步，接下来将分别介绍这7个task。**</font>
>
>**<font color=blue size=5>喜欢的小伙伴请点颗star，谢谢</font>**


task1 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task1/)
--------------------
<font size=4>task1包含的html基本元素有**header、article、asider、section、figure、footer、h1、h2、ul、li、p、img、br**元素，接下来将逐一讲解各个元素用法及含义。
其中header、acticle、section、asider、footer属于html5，它们一起构成新的网页结构。  
<u>HTML5网页结构</u>
![](https://i.imgur.com/wrA6hh9.png)  
代码结构如下：

	<!DOCTYPE html>          
	<html>
	   	 <head lang="en">
	        <meta charset="UTF-8">//字符编码
	        <title></title>
	    </head>
	    <body>
	        <header>...</header>//表示页面中的一个内容区块或者整个页面的标题
	        <nav>...</nav>//表示页面中的导航链接部分
	        <article>...</article>//表示页面中的一块与上下文不相关的独立内容，比如一篇文章中的文章
	        <section>...</section>//表示页面中的一块内容区块，比如页面的页眉，页脚等，也可以和(h1,h2,...)等一起使用，标示出文档的结构
	        <aside>...</aside>//表示artical元素的内容之外的，和内容相关的辅助信息
	        <footer>...</footer>//表示页面或者是页面中的一块区域的页脚，比如存放文件的创建时间、作者、联系方式等等
	    </body>
	</html>

</font>


task2 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task2/)
-----------
#### figure—独立流内容 ####  
figcaption—定义figure元素的标题  

	<figure>
       <figcaption>
           好看的图片
       </figcaption>
       <img src="images/2.jpg" alt="图片">
    </figure>
![](https://i.imgur.com/U4p4e6P.jpg)   
#### ol—有序列表 ####

 	<ol type="1">
               <li>排名1</li>
               <li>排名2</li>
               <li>排名3</li>
 	</ol>
![](https://i.imgur.com/xmu9sKt.jpg)  
ul—无序列表

	 <ul>
           <li>
               列表项目一
           </li>
           <li>
               列表项目二
           </li>
           <li>
               列表项目三
           </li>
      </ul>
![](https://i.imgur.com/UJBlB1U.jpg)  
#### table—表格 ####  
thead—表格 &nbsp;&nbsp; tbody-表格主体&nbsp;&nbsp;tfooter-表格尾部 &nbsp;&nbsp; tr-表格行 &nbsp;&nbsp; th-表头单元格 &nbsp;&nbsp; td-表格主体单元格  

	 <table border="1">
                   <thead>
                   <tr>
                       <th>表头</th>
                       <th>表头</th>
                       <th>表头</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <td>表内容单元格</td>
                       <td>表内容单元格</td>
                       <td><a href="#">操作</a></td>
                   </tr>
                   <tr>
                       <td>表内容单元格</td>
                       <td>表内容单元格</td>
                       <td><a href="#">操作</a></td>
                   </tr>
                   <tr>
                       <td>表内容单元格</td>
                       <td>表内容单元格</td>
                       <td><a href="#">操作</a></td>
                   </tr>
                   <tr>
                       <td>表内容单元格</td>
                       <td>表内容单元格</td>
                       <td><a href="#">操作</a></td>
                   </tr>
                   </tbody>
                   <tfoot>
                   <tr>
                       <td colspan="3">总计 <span>1000</span></td>
                   </tr>
                   </tfoot>
       </table>
![](https://i.imgur.com/qwt1M8G.jpg)
####  form表单 ####
**label**—为 input 元素定义标注  
**input**—输入框，支持多种type类型，如下：  
button：定义可点击按钮    
checkbox：定义复选框  
file：定义输入字段和 "浏览"按钮，供文件上传  
hidden：定义隐藏的输入字段  
image：定义图像形式的提交按钮  
password：定义密码字段。该字段中的字符被掩码  
radio：定义单选按钮  
reset：定义重置按钮。重置按钮会清除表单中的所有数据  
submit：定义提交按钮。提交按钮会把表单数据发送到服务器  
text：定义单行的输入字段，用户可在其中输入文本。默认宽度为 20 个字符  
**select**—下拉列表，option-下拉列表可选项  
**textarea**—多行的文本输入控件  
**button**—按钮

      <form>
          <div class="form1">
              <div class="form11">
                  <label for="email" class="formstyle">请输入邮箱地址</label>
                  <label for="password1" class="formstyle">请输入密码</label>
                  <label for="password2" class="formstyle">请重复输入密码</label>
                  <label class="formstyle">性别</label>
                  <label for="city">城市</label>
                  <label>爱好</label>
                  <label for="description">个人描述</label>
              </div>
              <div class="form12">
                  <input type="text" name="email" id="email" value="这是一个文本输入框">
                  <p>邮箱地址请按要求格式输入</p>
                  <input type="password" name="password" id="password1" value="1234567" >
                  <input type="password" name="password" id="password2" value="1234567" >
                  <p class="formstyle">密码请为6-16位数字</p>
                  <input type="radio" name="sex" value="male" checked>男
                  <input type="radio" name="sex" value="female">女
                  <select id="city" name="city">
                      <option value="beijing" >北京</option>
                      <option value="shanghai">上海</option>
                      <option value="nankjing">南京</option>
                  </select>
                  <input type="checkbox" name="sport" value="sport">运动
                  <input type="checkbox" name="art" value="art">艺术
                  <input type="checkbox" name="science" value="science">科学
                  <textarea id="description">  这是一个多行输入框，输入您的个人描述
                  </textarea>
              </div>
          </div>
          <button type="submit">确认提交</button>
      </form>
![](https://i.imgur.com/aWBTIKk.jpg)
task3 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task3/)
------------
#### 布局 ####
**div盒子模型 **     
Margin(外边距) - 清除边框外的区域，外边距是透明的  
Border(边框) - 围绕在内边距和内容外的边框  
Padding(内边距) - 清除内容周围的区域，内边距是透明的  
Content(内容) - 盒子的内容，显示文本和图像   

![](https://i.imgur.com/yGRtG1L.gif)   
**三栏布局**  
 html结构

     <div class="body">
        <div class="left">
		 </div>
        <div class="right">
	    </div>
        <div class="center">
         </div>
    </div>
css  

	.body
	{
	    width:1200px;
	    height:447px;
	    background-color: #eee;
	    border:1px solid #999;
	    padding:20px;
	    font-family: SimHei;
	    font-size:15px;
	    margin:20px auto;
	    position:relative;
	}
	
	.body .left
	{
	    width:200px;
	    height:120px;
	    background-color:#ffffff;
	  float:left;
	}
	.body .right
	{
	    width:80px;
	    height:390px;
	    background-color: #ffffff;
	    float:right;
	    padding:20px;
	}
	.body .center
	{
	    height:320px;
	    width:auto;
	    background-color: #ffffff;
	    margin-left:260px;
	    margin-right:180px;
	    border:1px solid gray;
	    padding: 20px;
	}
![](https://i.imgur.com/o99ZIAJ.jpg)
task4  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task4/)
------------
使用border-radius在矩形中实现两个四分之一圆  
html结构  

	<div class="square">
        <div class="circle1">

        </div>
        <div class="rectange">

        </div>
        <div class="circle2">

        </div>
    </div>
css  

    .square
	{
	    width:400px;
	    height:200px;
	    background-color: #ccc;
	    position: absolute;
	    left:50%;
	    top:50%;
	    margin-left: -200px;
	    margin-top: -100px;
	    overflow: hidden;
	}
	
	.square .circle1
	{
	    width:100px;
	    height:100px;
	    background-color: #fc0;
	    border-radius: 0 0 50px 0;
	    position: absolute;
	    left:-50px;
	    top:-50px;
	}
	.square .circle2
	{
	    width:100px;
	    height:100px;
	    background-color: #fc0;
	    border-radius: 50px 0 0 0;
	    position: absolute;
	    right:-50px;
	    bottom:-50px;
	}
![](https://i.imgur.com/4z2Qi7r.jpg)

task5  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task5/)
-------------
**两栏布局**
![](https://i.imgur.com/mUiopxf.jpg)

task6  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task6/)
----------
**报纸页，模拟报纸的布局**
第一部分
![](https://i.imgur.com/5KH4Mfn.jpg)
第二部分
![](https://i.imgur.com/jMuOrFL.jpg)

task7 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task7/)
----------
**新世界  
第一部分**
![](https://i.imgur.com/5wGf3JX.jpg)

**第二部分**
![](https://i.imgur.com/06Usuqq.jpg)

**第三部分**
![](https://i.imgur.com/pSdaB95.jpg)
  
**第四部分**
![](https://i.imgur.com/yIkQ3xM.jpg)

**第五部分**
![](https://i.imgur.com/uAhmdLk.jpg)