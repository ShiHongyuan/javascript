> Array 队列方法

	IE7 及更早版本的unshift()方法总是返回undefined 而不是数组的新长度。
	IE8 在非兼容模式下会返回正确的长度值。

> Array 位置方法

	使用indexOf()和lastIndexOf()方法查找特定项在数组中的位置，
	支持的浏览器包括IE9+、Firefox 2+、Safari 3+、Opera 9.5+和Chrome。

> Array 迭代方法：every() some() filter() foreach() map()

	支持这些迭代方法的浏览器有
	IE9+、Firefox 2+、Safari 3+、Opera 9.5+和Chrome

> Array 归并方法：reduce() reduceRight()

	支持这两个归并函数的浏览器有
	IE9+、Firefox 3+、Safari 4+、Opera 10.5 和Chrome。

> RegEXp的lastIndex属性全局和非全局模式下

	lastIndex属性在全局模式下每次执行exec()后会变化成匹配项的下一个位置，在非全局模式下，每次执行exec()都是从0开始
	但是IE即使在非全局模式下，lastIndex 属性每次也会变化。
