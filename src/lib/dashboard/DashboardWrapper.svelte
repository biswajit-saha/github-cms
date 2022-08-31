<div>
    <aside class="sidebar">
        <div class="logo-wrap">Logo</div>
        <div class="menu-wrap">
            <ul class="menu">
                <li class="menu-item">
                    <a href="/" class="current-item">Posts</a>
                </li>
                <li class="menu-item">
                    <a href="/">Posts</a>
                </li>
                <li class="menu-item">
                    <a href="/">Posts</a>
                </li>
                <li class="menu-item">
                    <a href="/">Posts</a>
                </li>
            </ul>
        </div>
        <div class="sidebar-footer">
            <a href="/logout"><button>Logout</button></a>
        </div>
    </aside>
    <div class="page-container">
        <div class="page-content-wrapper">
            <div class="page-header-wrap">
                Post > Lorem ipsum post title
            </div>
            <div class="content-area-main card">
                content area main
            </div>
            <div class="content-area-sidebar card">
                content-area sidebar
            </div>
        </div>
    </div>
</div>

<style>
.sidebar {
    background-color: var(--white);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 280px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
}
.logo-wrap {
    padding: 8px;
}
.menu-wrap {
    flex-grow: 1;
    overflow-y: auto;
}
.menu {
    list-style: none;
    padding: 0;
}
.menu-item {
    margin: 8px 0;
}
.menu-item a {
    display: flex;
    line-height: 40px;
    margin: 0 1rem;
    padding: 0 1rem;
    text-decoration: none;
    color: var(--gray-900);
    border-radius: var(--size-medium);
}
.menu-item a:hover {
    background-color: var(--gray-50);
}
.menu-item a.current-item {
    background-color: var(--blue-50);
}
.sidebar-footer {
    padding: 1rem;
    border-top: 1px solid var(--gray-50);
}
.page-container {
    margin-left: 280px;
}
.page-content-wrapper {
    padding: 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 40px;
}
.page-header-wrap {
    grid-column: auto / span 2;
    margin-bottom: 1rem;
}
</style>