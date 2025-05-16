<script setup lang="ts">
import { onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';


onMounted(() => {
  const toolbarOptions = [
    [{ 'font': [] }],//字体仓库
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown 字体大小
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], //配置H1~H6
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{'align':''},{'align':'center'},{'align':'right'},{'align':'justify'}],
    //[{ 'header': 1 }, { 'header': 2 }],               // custom button values 配置H1头和H2头
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    //[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript 上小内容和下小内容
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent 缩进和非缩进
    ['link', 'image', 'video' /** ,'formula'*/],
    [{ 'direction': 'rtl' }],                         // text direction
    ['clean']                                         // remove formatting button
  ];
  const quill = new Quill('.editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
})
</script>
<template>
  <div class="editor">

  </div>
</template>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
}
</style>
