<template>
    <div>
        <div v-show="modal" class="failed-bg">
         <div class="failed-div">
                <v-icon class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
            <v-icon class="failed-icon" color="red">mdi-alert-circle</v-icon>
            <br><br>
           <div class="failed-header">Operation failed</div>
        </div>
        </div>

    </div>
</template>



<style scoped>
.failed-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.failed-div { text-align:center; position: relative; border-radius:8px; width: 35%; height: 50vh; padding: 50px 120px;background:#ffffff;z-index: 99999999;}
.failed-icon {font-size: 100px;}
.failed-header{font-size:20px}
.form-close{position: absolute; right: 20px; top: 20px;}
@media (max-width: 479px) {

.failed-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.failed-div { text-align:center; position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999;}
.form-close{position: absolute; right: 20px; top: 20px;}
}
</style>