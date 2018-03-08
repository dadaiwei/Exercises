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
figure——规定独立的流内容（图像、图表、照片、代码等等）  
figcaption——定义figure元素的标题  

	<figure>
       <figcaption>
           好看的图片
       </figcaption>
       <img src="images/2.jpg" alt="图片">
    </figure>
![](https://i.imgur.com/U4p4e6P.jpg)   
ol-有序列表

 	<ol type="1">
               <li>排名1</li>
               <li>排名2</li>
               <li>排名3</li>
 	</ol>
![](https://i.imgur.com/xmu9sKt.jpg)  
ul-无序列表

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


task3 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task3/)
------------

task4  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task4/)
------------

task5  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task5/)
-------------

task6  &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task6/)
----------

task7 &nbsp;&nbsp;&nbsp;&nbsp;[链接](http://dadaiwei.github.io/Exercises/task7/)
----------