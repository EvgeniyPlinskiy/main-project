<template>
  <div class="d-flex justify-content-center pagination-main">
    <div class="row ">
      <nav aria-label="Page navigation example ">
        <ul class="pagination mt-5">
          <li class="page-item">
            <a class="page-link mr-1" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.pagination-main {
  background-color: #202020;
  height: 100%;
}
.page-link {
  background-color: #0D0D0D !important;
  border: none !important;
  color: #fff !important;
}
.page-link:hover {
  background-color: #104BE3 !important;
}
</style>