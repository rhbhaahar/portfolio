<template>
  <div class="contacts-wrapper">
    <div class="contacts-header">
      SOME HEADER
    </div>
    <div class="contacts-body">
      <p class="legend">{{ $t('contacts.legend') }}</p>
      <div class="contacts-item">
        <div class="contacts-title">Email:</div>
        <a href="mailto:dev23lx@gmail.com">dev23lx@gmail.com</a>
      </div>
      <div class="contacts-item">
        <div class="contacts-title">WhatsApp:</div>
        <a href="https://wa.me/+79515127776" target="_blank">+79515127776</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped lang="scss">
.contacts-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  .contacts-header {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }

  .contacts-body {
    display: flex;
    flex-direction: column;

    .legend {
      margin: 16px 0;
    }

    .contacts-item {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #123;

      .contacts-title {
        min-width: 100px;
        font-size: 18px;
        font-weight: 600;
      }

      a {
        text-decoration: none;
        color: #2c3e50;
        transition: all .3s ease;

        &:hover {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
