<script>
    import "@fontsource/petrona";
    import "../app.css";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Reader from "$lib/components/wrapper/Reader.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="min-h-screen">
    <Navbar />
    <div class="flex flex-col md:flex-row">
        <Sidebar />
        <Reader>
            <slot />
        </Reader>
    </div>
    <Footer/>
       
</div>