<script>
  export let name;
</script>

<main>
  <!-- <h1>Hello {name}!</h1> -->
  <div class="container">
    <h1>Find Array Sum Number</h1>
    <form autocomplete="off" class="addNumbers">
      <label for="array">Add Array Numbers</label>
      <input type="number" name="array" required />
      <button>Add Numbers</button>
    </form>
    <form autocomplete="off" class="search">
      <label for="find">Number to Find</label>
      <input type="number" name="find" class="find" required />
      <button>Search</button>
    </form>
    <div class="showArrRes" />
  </div>

  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps @MikeDev - 2021
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
