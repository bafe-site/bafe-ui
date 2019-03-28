<template>
    <div>
        <div class="about_us">
            <h1>bafe.id</h1>
            <p>bafe id adalah sebuah platform citizen journalism yang bergerak pada bidang kemanusiaan.</p>
        </div>
        <div class="kita">
            <h1>Meet Us</h1>
            <table>
                <tr>
                    <td>
                        <img src="../assets/S__17219904.jpg"/>
                        <h2>Kirono Arundati</h2>
                    </td>
                    <td>
                        <img src="../assets/S__17219904.jpg"/>
                        <h2>Metha Putri</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="../assets/S__17219904.jpg"/>
                        <h2>Ferdinand Kurnia</h2>
                    </td>
                    <td>
                        <img src="../assets/S__17219904.jpg"/>
                        <h2>M. Vicky Afris</h2>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'aboutUs'
}
</script>

<style scoped>
    .about_us {
        border: 5px solid #385446;
    }
    table {
        width: 100%;
        height: 200px;
        max-height: 400px;
        padding: 0px 8px;
        border-spacing: 10px;
    }
</style>
