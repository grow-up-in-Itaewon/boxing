<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Fight Club
                </v-list-item-title>
                <v-list-item-subtitle>
                    격투기용품 브랜드
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <template v-for="(item, i) in items">
                <template v-if="item.subItems" >
                    <v-list-group
                        :key="i"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                        v-for="subItem in item.subItems"
                        :key="subItem.title"
                        :to="subItem.to"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="subItem.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </template>

                <template v-else>
                    <v-list-item 
                        :key="item.title" 
                        v-model="item.active"
                        :prepend-icon="item.action"
                        :to="item.to"
                    >  
                        <v-list-item-icon>
                            <v-icon v-text="item.action"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </template>
        </v-list>
    </div>
</template>
<script>
export default {
   data: () => ({
      items: [
        {
          title: '신상품',
          action: 'mdi-ticket',
          to: '/about'
        },
        {
          title: '글러브',
          action: 'mdi-ticket',
          active: false,
          subItems: [
              {
                  title: '8oz(백글러브)',
                  to: '/about',
              },
              {
                  title: '10oz(트레이닝)',
                  to: '/about'
              },
              {
                  title: '12oz(트레이닝)',
                  to: '/about'
              },
              {
                  title: '14oz~16oz(트레이닝)',
                  to: '/about'
              },
          ]
        },
        {
          title: '샌드백',
          action: 'mdi-ticket',
          subItems: [
              {
                  title: '장비',
                  to: '/about'
              }
          ]
        },
      ],
    })
}
</script>

<style scoped>
.v-list-item--active {
  background-color: cyan;
}
</style>