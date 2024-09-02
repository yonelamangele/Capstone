<template>
    <nav>
        <ul class="nav nav-pills" id="inav">
            <li class="nav-item">
                <a class="nav-link" href="/" id="gang"> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about"> About Us </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> Products </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/categories"> Categories </a></li>
                    <li><hr class="dropdown-navider"></li>
                    <li><a class="dropdown-item" href="/productsView"> All Products </a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/adminView"> Admin </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contactView"> Contact Us </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
a {
    font-size: 25px;
    color: white;
}

.pic {
    height: 100px;
    width: 200px;
}
</style>