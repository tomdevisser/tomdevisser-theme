<section <?php echo get_block_wrapper_attributes( array( 'class' => 'themejson-generator' ) ); ?>>
  <form id="generate-theme-json-form" class="generate-theme-json-form">
    <fieldset class="layout-fieldset">
      <legend>Layout</legend>
      <label for="content-size">Content Size</label>
      <input id="content-size" name="content-size" type="number" min="200" max="2000">
      <label for="wide-size">Wide Size</label>
      <input id="wide-size" name="wide-size" type="number" min="200" max="2000">
    </fieldset>

    <fieldset class="appearance-fieldset">
      <legend>Appearance</legend>
      <label for="appearance-tools"><input id="appearance-tools" name="appearance-tools" type="checkbox"> Appearance Tools</label>
    </fieldset>

    <fieldset class="colors-fieldset">
      <legend>Colors</legend>
      <div id="color-palette-container" class="color-palette-container">
        <div class="color-palette-item">
          <label for="color-1-name">Name</label>
          <input id="color-1-name" name="color-1-name" type="text">
          <label for="color-1-hex">Hex Value</label>
          <input id="color-1-hex" name="color-1-hex" type="text">
        </div>
      </div>
      <button id="add-color-button" class="button secondary">Add color</button>
    </fieldset>
    <input type="submit" class="button primary" value="Generate Theme.json">
  </form>
</section>
