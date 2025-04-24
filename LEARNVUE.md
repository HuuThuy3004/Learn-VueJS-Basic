## SS1: Cấu trúc của Vuejs (gồm 3 phần)
<script>
    -> sẽ viết: logic code
</script>

<template>
    -> sẽ viết: component/tags HTML
</template>

<style>
    -> sẽ viết: css
</style>

## SS2: Dynamic value (giá trị/dữ liệu linh hoạt)
phần script phải có thêm atributes là setup ở trong thẻ script: <script setup> let num = 10; </script>
viết phần khai báo biến rồi gọi biến đó ở phần thẻ template: <template> Number: {{ num }} </template> // -> Number: 10
học đc: 
- dấu {{ variable }} để hiển thị một biến có dữ liệu
- nhớ phải có atributes setup ở trong thẻ script