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

## SS4: Events
* Trong vuejs viết events sẽ khác: 
1. @ (ngắn gọn)
2. v-on 

* Các sự kiện DOM phổ biến:
1. Chuột: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
2. Bàn phím: keyup, keydown, keypress
3. Form: submit, change, input, focus, blur
4. Cảm ứng: touchstart, touchmove, touchend

* Modifier Sự Kiện
Vue cung cấp các "modifier" để xử lý các trường hợp phổ biến:
<!-- Chỉ kích hoạt một lần -->
<button @click.once="handleClick">Click once</button>
<!-- Ngăn hành vi mặc định -->
<form @submit.prevent="onSubmit">...</form>
<!-- Dừng lan truyền sự kiện -->
<button @click.stop="handleClick">Stop propagation</button>
<!-- Chỉ kích hoạt khi nhấn phím Enter -->
<input @keyup.enter="submit">
<!-- Kết hợp nhiều modifier -->
<form @submit.prevent.stop="onSubmit">...</form>

## SS5: V-model (two-way binding)
+ Two-way binding là một kỹ thuật lập trình phát triển giao diện người dùng, trong đó dữ liệu đồng bộ hóa tự động giữa model và view.
  Khi dữ liệu thay đổi trong model, thì view nó sẽ tự động cập nhật và ngược lại.
  Đặc điểm chính của two-way binding:
  - Tự động đồng bộ hóa dữ liệu giữa model và view
  - Giảm thiểu code phải viết để cập nhật UI theo trạng thái của ứng dụng
  - Dễ dàng quản lý trạng thái của ứng dụng
+ V-model là một directive (chỉ thị) dùng để tạo ràng buộc hai chiều (two-way binding) giữa các form input và state (trạng thái) của ứng dụng. Đây là một cách thuận tiện để đồng bộ hóa dữ liệu giữa giao diện người dùng và dữ liệu trong component Vue của bạn.

## SS6: Router hoạt động như nào?
Router trong Vue.js (cụ thể là Vue Router) hoạt động như một hệ thống điều hướng cho ứng dụng Single Page Application (SPA). 

## SS7: Props và Function Props
Props (properties) trong Vue.js là cơ chế cho phép truyền dữ liệu giữa component parent và component child
Truyền dữ liệu theo dạng kiểu binhthuong và kiểu function
1. Kiểu binhthuong: <ChildComponent :name-variable="value-variable" />
2. Kiểu function: <ChildComponent @name-function="value-function" />

## SS8: List Rendering
Sử dụng: v-for="name_variable in variable_array" :key="name_variable.id"

## SS9: Conditional
Sử dụng: v-if, v-else-if, v-else
Cú pháp: v-if="conditional", v-else-if="conditional"

## SS10: Computed
Sử dụng: computed()