<template>
    <div>
        <div v-show="modal" class="success-bg">
         <div class="success-div">
                <v-icon class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
            <v-icon class="success-icon" color="#61fa64">mdi-check-circle</v-icon>
            <br><br>
           <div class="success-header">Operation Successful</div>
        </div>
        </div>

    </div>
</template>



<style scoped>
.success-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.success-div { text-align:center; position: relative; border-radius:8px; width: 35%; height: 50vh; padding: 50px 120px;background:#ffffff;z-index: 99999999;}
.success-icon {font-size: 100px;}
.success-header{font-size:20px}
.form-close{position: absolute; right: 20px; top: 20px;}
@media (max-width: 479px) {

.success-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.success-div { text-align:center; position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999;}
.form-close{position: absolute; right: 20px; top: 20px;}
}
</style>