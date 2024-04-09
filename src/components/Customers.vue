<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ICustomer } from '../types/customer.type';
import { joinTags } from '../utils/tag.util';

const props = defineProps<{ items: ICustomer[] }>();
const emit = defineEmits(['deleteSuccess']);
const router = useRouter();

const onDeleteClick = (item: ICustomer) => {
    console.log(item)
}
const onUpdateClick = (item: ICustomer) => {
    router.push(`/${item.id}`);
}
</script>

<template>
    <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Tags
                </th>
                <th class="actions">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-if="props.items.length">
                <tr v-for="item in props.items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ joinTags(item.tags) }}</td>
                    <td class="actions">
                        <v-btn class="" color="blue-lighten-2" icon="mdi-pencil" variant="text"
                            @click="onUpdateClick(item)"></v-btn>
                        <v-btn class="" color="red-lighten-2" icon="mdi-trash-can-outline" variant="text"
                            @click="onDeleteClick(item)"></v-btn>
                    </td>
                </tr>
            </template>
            <tr class="empty" v-if="!props.items.length">
                <td colspan="4">No data found</td>
            </tr>
        </tbody>

    </v-table>
</template>

<style scoped>
.actions {
    width: 200px;
    text-align: center !important;
}

.empty {
    padding: 24px 0;
    text-align: center;
}
</style>