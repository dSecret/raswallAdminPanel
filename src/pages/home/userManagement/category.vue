<template>
<div>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1 mr-2"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item._id }}</td>
      <td class="text-xs-right">{{ props.item.catgName }}</td>
      <td class="text-xs-right">{{ props.item.maxTime }}</td>
      <td class="text-xs-right">{{ props.item.enrolledLists }}</td>
      <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
      </td>
    </template>
  </v-data-table>
 <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.native="editItem(defaultItem)"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          {{formTitle}}
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs6>
                <v-text-field
                  placeholder="CategoryName"
                  v-model="editedItem.catgName"
                ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="MaxTime"
                v-model="editedItem.maxTime"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click.native="close">Cancel</v-btn>
          <v-btn flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
</div>
</template>
<script>
import {getCategories,deleteCategory,saveCategory,addCategory} from '../../../helpers/userManagement.js'
export default {
    data () {
      return {
        dialog:false,
        headers: [
          { 
            text: 'id', 
            value: '_id',
            align: 'center',
            sortable: false 
          },
          { text: 'Category', 
            value: 'catgName', 
            align:'right'
          },
          { text: 'MaxTime', 
            value: 'maxTime',
            align:'right'
          },
          { text: 'EnrolledLists', 
            value: 'enrolledLists',
            align:'center'
          },
          { 
            text: 'Actions', 
            value: '_id', 
            sortable: false 
          }
        ],
        items: [],
        editedIndex: -1,
        editedItem: {
          __v:'',
          _id:'',
          catgName:'',
          maxTime:'',
          enrolledLists:[]
        },
        defaultItem: {
          __v:'',
          _id:'',
          catgName:'',
          maxTime:'',
          enrolledLists:[]
        }
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },    
    created(){
        this.getCategories()
    },
    methods:{
      editItem (item) {
        // this.editedIndex = this.items.indexOf(item)
        if(item._id==='')
          this.editedIndex=1
        else
          this.editedIndex=0
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        confirm('Are you sure you want to delete this Category?') && 
        deleteCategory(item).then(res=>{
            console.log(res)
            if(res.status==200){
                this.getCategories()
            }
        })
      },
      getCategories(){
        getCategories()
            .then(res=>{
                  this.items=res.data
            })        
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex) {
          addCategory(this.editedItem)
                .then(res=>{
                    console.log(res)
                })
        } else {
          saveCategory(this.editedItem)
                      .then(res=>{
                        console.log(res)
                      })
        }
        this.close()
      }
    }
}
</script>