<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-group
                v-for="(item, i) in items"
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
        </v-list>
    </div>
</template>
<script>
export default {
   data: () => ({
      items: [
        {
          title: 'Home',
          action: 'mdi-ticket',
        },
        {
          title: '신상품',
          action: 'mdi-ticket',
          subItems: [
              {
                  title: '헤비히터',
                  to: '/about'
              }
          ]
        },
        {
          title: '신상품',
          action: 'mdi-ticket',
          subItems: [
              {
                  title: '헤비히터',
                  to: '/about'
              }
          ]
        },
      ],
    })
}
</script>