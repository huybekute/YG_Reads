<script setup>
    import axios, { toFormData } from 'axios';
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    // 2. Tac gia
    // An/Hien List tác giả
    const showAuthors = ref(false)
    const toggleAuthors = () => {
        showAuthors.value = !showAuthors.value
    }

    // lay thong tin tac gia
    const authors = ref([])

    //load ds tac gia
    const loadAuthor = async () => {
        const res = await axios.get("http://localhost:5000/api/authors")
        authors.value = res.data
    }
    onMounted(() => loadAuthor())

    //them tac gia
    const newAuthor = ref ({
        authorID: '',
        name: '',
        description: ''
    });
    //them dong 
    const newRowAuthor = ref(false)
    const addRowAuthor = () => {
        newRowAuthor.value = true
    }


    const addAuthor = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/authors", newAuthor.value)

            authors.value.push(res.data)

            //reset form
            newAuthor.value = {
                authorID : '',
                name : '',
                description: ''
            };
            newRowAuthor.value = false

        }
        catch (error) {
            alert('Lỗi khi thêm tác giả');
            newRowAuthor.value = false
        }
    }


    //xoa tac gia
    const selectAuthor = ref([])

    const isSelect = ref(false)
    const isSelectMode = () => {
        isSelect.value = !isSelect.value;
        selectAuthor.value = [];
    }

    const chooseAuthor = (author) => {
        if(!isSelect.value) return;
        const index = selectAuthor.value.findIndex(a => a._id === author._id)
        if(index > -1){
            selectAuthor.value.splice(index, 1)
        } else {
            selectAuthor.value.push(author)
        }
    }
    const removeAuthor = async () => {
        if(selectAuthor.value.length === 0){
            alert('Vui lòng chọn ít nhất 1 tác giả')
            return;
        }
        if(!confirm('Bạn có chắc chắn muốn xóa')) return;
        try{
            for(const author of selectAuthor.value){
                await axios.delete(`http://localhost:5000/api/authors/${Number(author.authorID)}`);
            }
            
            //cap nhat ds sau khi xóa
            const selectID = selectAuthor.value.map(a => a._id)
            authors.value = authors.value.filter(a => !selectID.includes(a._id))
            selectAuthor.value = [];
            isSelect.value = false;
        }
        catch(error){
            alert("Lỗi khi xóa tác giả")
        }
    }

    // Cap nhat tac gia
    const editAuthor =  ref(null);

    const editSelectedAuthor = () => {
        if (selectAuthor.value.length === 0) {
            alert('Vui lòng chọn 1 tác giả để sửa');
            return;
        }
        if (selectAuthor.value.length > 1) {
            alert('Chỉ có thể sửa thông tin của một tác giả tại một thời điểm.');
            return;
        }

        editAuthor.value = { ...selectAuthor.value[0] };
    }
    const updateAuthor = async () => {
        if(selectAuthor.value.length === 0){
            alert('Vui lòng chọn ít nhất 1 tác giả')
            return;
        }
        
        if(!confirm('Bạn có chắc chắn thông tin cập nhật')) return;
        try{
            await axios.put(`http://localhost:5000/api/authors/${editAuthor.value.authorID}`, {
                authorID : editAuthor.value.authorID,
                name : editAuthor.value.name,
                description : editAuthor.value.description
            });
            await loadAuthor();
            editAuthor.value = null;
            selectAuthor.value = [];
            isSelect.value = false;
        }
        catch(error){
            alert('Lỗi cập nhật')
        }
    } 

    //3. Nha xuat ban
    //An/Hien List NXB
    const showPublishing = ref(false)
    const togglePublishing = () => {
        showPublishing.value = !showPublishing.value
    }

    //lay thonbg tin nxb
    const publishings = ref([])
    const loadPublishing = async () => {
        const res = await axios.get('http://localhost:5000/api/publishings')
        publishings.value = res.data
    } 

    onMounted(() => loadPublishing())

</script>

<template>
    <div class="flex justify-center pb-5">
        <h1 class="text-xl underline underline-offset-6">Quản lý nội dung</h1>
    </div>
    <div>
        <h1 class="text-xl text-blue-700 hover:underline">1. Sách</h1>
    </div>

    <!-- 2. Tác giả -->
    <div class="flex flex-col">
        <h1 class="text-xl cursor-pointer hover:underline text-blue-700" @click="toggleAuthors">2. Tác giả</h1>
        <div class="mt-4" v-if="showAuthors">
            <div class="flex font-semibold border-b p-2 bg-gray-100">
                <div class="w-1/4">ObjectID</div>
                <div class="w-1/4">Author ID</div>
                <div class="w-1/4">Tên tác giả</div>
                <div class="w-1/4">Mô tả</div>
            </div> 

            <div v-for="author in authors" :key="author._id" class="border-b">
                <div v-if="!editAuthor || editAuthor._id!==author._id" class="flex p-2 cursor-pointer" @click="chooseAuthor(author)"
                    :class="selectAuthor.find(a=>a._id===author._id)?'bg-red-100':'hover:bg-gray-50'">
                    <div class="w-1/4">{{ author._id }}</div>
                    <div class="w-1/4">{{ author.authorID }}</div>
                    <div class="w-1/4">{{ author.name }}</div>
                    <div class="w-1/4">{{ author.description }}</div>
                </div>
                <!-- form sua -->
                <div v-else class="flex p-2 gap-5 bg-yellow-50">
                    <div class="w-1/4 text-gray-400">Auto</div>
                    <input v-model="editAuthor.authorID" class="w-1/4 border p-1 rounded" placeholder="Author ID"/>
                    <input v-model="editAuthor.name" class="w-1/4 border p-1 rounded" placeholder="Tên tác giả"/>
                    <input v-model="editAuthor.description" class="w-1/4 border p-1 rounded" placeholder="Mô tả"/>
                    <button type="submit" @click="updateAuthor" class="ml-3 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                        Lưu
                    </button>
                </div>
            </div>
            
            <div v-if="newRowAuthor">
                <form @submit.prevent="addAuthor" class="flex p-2 gap-5 border-b bg-green-50">
                    <div class="w-1/4 text-gray-400 ">Auto</div>
                    <input v-model="newAuthor.authorID" class="w-1/4 border p-1 rounded " placeholder="Author ID"/>
                    <input v-model="newAuthor.name" class="w-1/4 border p-1 rounded " placeholder="Tên tác giả"/>
                    <input v-model="newAuthor.description" class="w-1/4 border p-1 rounded " placeholder="Mô tả"/>
                    <button type="submit" class="ml-3 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                        Lưu
                    </button>
                </form>
            </div>
            <div class="flex pt-5 gap-5 pb-5">
                <button @click="addRowAuthor" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Thêm </button>
                <button v-if="!isSelect" @click="isSelectMode" class="px-4 py-2 bg-yellow-400 text-white rounded 
                hover:bg-yellow-500">Chọn </button>
                <button v-if="isSelect" @click="editSelectedAuthor" class="px-4 py-2 bg-yellow-400 text-white rounded 
                hover:bg-yellow-500">Sửa</button>
                <button v-if="isSelect" @click="removeAuthor" class="px-4 py-2 bg-red-600 text-white rounded 
                hover:bg-red-700">Xóa </button>
                <button v-if="isSelect" @click="isSelectMode" class="px-4 py-2 bg-blue-600 text-white rounded 
                hover:bg-blue-700">Trở lại</button>
            </div>
        </div>
    </div>

    <!-- 3. Nhà xuât bản -->
    <div class="flex flex-col">
        <h1 class="text-xl cursor-pointer hover:underline text-blue-700" @click="togglePublishing">3. Nhà xuất bản</h1>
        <div class="mt-4" v-if="showPublishing">
            <div class="flex font-semibold border-b p-2 bg-gray-100">
                <div class="w-1/4">ObjectID</div>
                <div class="w-1/4">Publishing ID</div>
                <div class="w-1/4">Tên NXB</div>
                <div class="w-1/4">Mô tả</div>
            </div> 

            <div v-for="publishing in publishings" :key="publishing._id" class="border-b">
                <div v-if="!editAuthor || editAuthor._id!==author._id"
                    class="flex p-2 cursor-pointer"
                    @click="chooseAuthor(author)"
                    :class="selectAuthor.find(a=>a._id===author._id)?'bg-red-100':'hover:bg-gray-50'">
                    <div class="w-1/4">{{ publishing._id }}</div>
                    <div class="w-1/4">{{ publishing.publishingID }}</div>
                    <div class="w-1/4">{{ publishing.name }}</div>
                    <div class="w-1/4">{{ publishing.description }}</div>
                </div>
                <!-- form sua -->
                <div v-else class="flex p-2 gap-5 bg-yellow-50">
                    <div class="w-1/4 text-gray-400">Auto</div>
                    <input v-model="editAuthor.authorID" class="w-1/4 border p-1 rounded" placeholder="Author ID"/>
                    <input v-model="editAuthor.name" class="w-1/4 border p-1 rounded" placeholder="Tên tác giả"/>
                    <input v-model="editAuthor.description" class="w-1/4 border p-1 rounded" placeholder="Mô tả"/>
                    <button type="submit" @click="updateAuthor" class="ml-3 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                        Lưu
                    </button>
                </div>
            </div>
            
            <div >
                <form @submit.prevent="add" class="flex p-2 gap-5 border-b bg-green-50">
                    <div class="w-1/4 text-gray-400 ">Auto</div>
                    <input v-model="newAuthor.authorID" class="w-1/4 border p-1 rounded " placeholder="Author ID"/>
                    <input v-model="newAuthor.name" class="w-1/4 border p-1 rounded " placeholder="Tên tác giả"/>
                    <input v-model="newAuthor.description" class="w-1/4 border p-1 rounded " placeholder="Mô tả"/>
                    <button type="submit" class="ml-3 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                        Lưu
                    </button>
                </form>
            </div>
            <div class="flex pt-5 gap-5 pb-5">
                <button @click="addRow" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Thêm </button>
                <button v-if="!isSelect" @click="isSelectMode" class="px-4 py-2 bg-yellow-400 text-white rounded 
                hover:bg-yellow-500">Chọn </button>
                <button v-if="isSelect" @click="editSelectedAuthor" class="px-4 py-2 bg-yellow-400 text-white rounded 
                hover:bg-yellow-500">Sửa</button>
                <button v-if="isSelect" @click="removeAuthor" class="px-4 py-2 bg-red-600 text-white rounded 
                hover:bg-red-700">Xóa </button>
                <button v-if="isSelect" @click="isSelectMode" class="px-4 py-2 bg-blue-600 text-white rounded 
                hover:bg-blue-700">Trở lại</button>
            </div>
        </div>
    </div>

</template>
