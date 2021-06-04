<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">新增文章</h4>
        <p class="category">对文章内容进行新增</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Title</label>
              <md-input v-model="title" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>label</label>
              <md-input v-model="label" type="text"></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Please write your story</label>
              <md-textarea v-model="content" style="height:300000px"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button v-on:click="submit()" class="md-raised md-success">Add article</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      title: "",
      label: "",
      content: "",
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      title: null,
      label: null,
      country: null,
      code: null,
      aboutme:
        "My story is......"
    };
  },
  methods: {
    submit: async function(){
      let data = {
        "title": this.title,
        "content": this.content,
        "label": this.label,
        "author": "小小"
      }
      console.log(data);
      axios({
        method: "post",
        url: "api/admin/addArticle",
        headers: {
          "Authorization": "Bearer " + localStorage.token
        },
        data: data
      }).then((resp) => {
        console.log(resp.data)
        alert("增加成功")

      })
    }
  }
};
</script>
<style></style>
