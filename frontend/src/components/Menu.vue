<template>
    <div>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>
<script>
export default {
    data () {
        return {
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
            ] 
        }
    }
}

</script>