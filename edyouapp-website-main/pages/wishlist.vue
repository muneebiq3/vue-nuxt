<template>
  <div>
    <HeaderV />
    <Banner />
  </div>
</template>

<script>
</script>

<style scoped>
.main-logo .nuxt-link-active a.img {
  background: url(~/assets/img/logo-new-black.svg);
}

.btn-primary {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 50px; */
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  /* height: 50px;  */
  /* /* left: 0px;
  top: 137px; */
  background: #3a814e;
  border-radius: 153px;
  display: inline-block;
}

.inner-top {
  padding-top: 80px;
}

.page-heading {
  margin-top: 40px;
}

.page-heading h1 {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  color: #1d1d1f;
}

.page-heading p {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 350;
  font-size: 22px;
  line-height: 31px;
  color: rgba(0, 0, 0, 0.9);
}

.uni-city h1 {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #1d1d1f;
}

.uni-list table thead th {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 350;
  font-size: 18px;
  line-height: 25px;
  border: none;
}

.uni-list table tbody td,
.uni-list table tbody th {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #1d1d1f;
  vertical-align: middle;
}

.uni-list table thead th:last-child,
.uni-list table tbody td:last-child {
  width: 170px;
  text-align: center;
}

.uni-list table tbody td a {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  text-decoration-line: underline;
  color: #3a814e;
}

.uni-listing {
  margin-top: 50px;
}

.uni-city {
  margin-bottom: 25px;
}

.searching .input-group-prepend span:before {
  background-image: url(~/assets/img/search.svg);
  padding: 0;
  border: 0;
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  z-index: 9;
  pointer-events: none;
}

.searching .input-group-prepend span {
  padding: 0;
  background: transparent;
  border: 0;
}

.searching input.form-control {
  background: #f0f0f0;
  border-radius: 48px !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control::placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control:-ms-input-placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control::-ms-input-placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
}

.toCapitalize {
  text-transform: capitalize;
}

td[aria-colindex="2"] {
  text-transform: capitalize;
}

@media (max-width: 640px) {
  section.uni-listing .input-group.searching {
    margin-bottom: 50px;
  }
}

.form-row {
  margin-bottom: 10px;
}
</style>
