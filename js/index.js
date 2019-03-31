$(function() {
    // 自由記述欄追加
  $('.freeform-add-button').on('click', () => {
    const targetElement = $(this).parent() // 定型文のdivがくるイメージ
    const contentElement = `
    <div class="freeform">
      <textarea rows="5" cols="40"></textarea>
    </div>
    `
    targetElement.append(contentElement)
  })

  // 定型文のブロッククリック時の処理(エディタ欄下部に追加), typeで分ける？
  $('.templateBlock').on('click', () => {
    const me = $(this) // hiddenとかで素のテキスト持ってる前提
    const content = me.find('.content').val()
    const templateElement = `
    <div class="template-closing">
      <div class="content-area">
      ${content}
      </div>
      <div>
        <button type="button" class="freeform-add-button" />
      </div>
    </div>
    `
    $('#editor').append(templateElement) // エディタ部分のIDをeditorに仮置き, editor下部に要素追加
  })

  // Copyボタン押下時クリップボードにコピー
  $('#copy-button').on('click', () => {
    const editor = $('#editor')
    const templates = editor.find('.template')
    const templateTexts = templates.map((ele) => {
      if (ele.has('textarea')) {
        ele.val()
      }
      ele.find('.content-area').text
    })
    templateTexts.join('\n')

    document.execCommand('Copy')

    alert('クリップボードにコピーしました！')
  })

  // ユーザ名等をテンプレート内に埋め込んで返す
  function replaceUserInfo(text) {
    const userName = $('#user-name').val() // 名前フォームのIDがuser-nameである前提
    const companyName = $('#compary-name').val() // 会社名フォームのIDがcompany-nameである前提
    text.replaceAll('[userName]', userName)
    text.replaceAll('[companyName]', companyName)

    return text
  }

  // JSON読み込みモック用
  function getJSON() {
  }

  // Gmailで開く用
  function openGmail() {
  }


  $(function(){
    //json読み込みDOM生成
    $.getJSON("templates.json", function (data) {
      var sentens = data[0].sentences;
      console.log(sentens);

      //$('.select-contents-area').append(')
    });
  });


})