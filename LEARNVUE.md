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

## SS3: Reactive và Ref
Reactive và Ref là hai API chính trong Vue.js Composition API (được giới thiệu từ Vue 3) để tạo và quản lý trạng thái phản ứng (reactive state).
+ Ref chỉ sử dụng 1 đối tượng và 1 thuộc tính -> ref({} or [] or 0 ....) hoặc tạo ra một đối tượng tham chiếu phản ứng cho một giá trị đơn lẻ.
Tạo một ref:
const count = ref(0)
Truy cập giá trị:
count.value -> console.log(count.value) // 0
Thay đổi giá trị:
count.value++ -> console.log(count.value) // 1
+ Reactive chỉ sử dụng 1 object trong có nhiều đối tượng hoặc tạo một reactive object dựa trên đối tượng được truyền vào. Có thể truy cập trực tiếp thuộc tính.
Tạo một reactive object
const state = reactive({
  count: 10,
  name: 'Vue'
})
Truy cập và thay đổi giá trị trực tiếp
state.count -> console.log(state.count) // 10
state.count++ -> console.log(state.count) // 11