function doGet() {
//   return HtmlService.createHtmlOutputFromFile("Page");
return HtmlService.createTemplateFromFile("Page").evaluate();
}

function hello() {
    return "<p>this is an apple</p>";
}

function multipleChoice() {
    var r0 = '<div class="row">    <div class="col s4">      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis corporis accusamus obcaecati. Omnis nulla rerum suscipit molestias doloremque facere eligendi enim? Perspiciatis quae, voluptatum hic iusto quisquam id minus?</p>    </div>    <div class="col s8">      <form>        <p>          <label>            <input class="with-gap" name="group1" type="radio" value="Red" checked />            <span>Red</span>          </label>        </p>        <p>          <label>            <input class="with-gap" name="group1" type="radio" value="Yellow" />            <span>Yellow</span>          </label>        </p>       <p>          <label>            <input class="with-gap" name="group1" type="radio" value="Green" />            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis corporis accusamus obcaecati. Omnis nulla rerum suscipit molestias doloremque facere eligendi enim Perspiciatis quae, voluptatum hic iusto quisquam id minus?</span>          </label></p></form></div>        </div>';

    var r='<div class="row">\
    <div class="col s4">\
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis corporis accusamus obcaecati. Omnis nulla rerum suscipit molestias doloremque facere eligendi enim? Perspiciatis quae, voluptatum hic iusto quisquam id minus?</p>\
    </div>\
    \
    <div class="col s8">\
      <form>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Red" checked />\
            <span>Red</span>\
          </label>\
        </p>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Yellow" />\
            <span>Yellow</span>\
          </label>\
        </p>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Green" />\
            <span>green</span>\
          </label>\
        </p>\
      </form>\
    </div>    </div>    '
    return r;
}

function renderMultipleChoice() {

    var r='<div class="row">\
    <div class="col s4">\
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis corporis accusamus obcaecati. Omnis nulla rerum suscipit molestias doloremque facere eligendi enim? Perspiciatis quae, voluptatum hic iusto quisquam id minus?</p>\
    </div>\
    \
    <div class="col s8">\
      <form>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Red" checked />\
            <span>Red</span>\
          </label>\
        </p>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Yellow" />\
            <span>Yellow</span>\
          </label>\
        </p>\
        <p>\
          <label>\
            <input class="with-gap" name="group1" type="radio" value="Green" />\
            <span>green</span>\
          </label>\
        </p>\
      </form>\
    </div>   </div>     '

    
        return r;
}