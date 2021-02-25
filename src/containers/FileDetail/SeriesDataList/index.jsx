import React from "react";


export default function SeriesDataList(props) {
  let { data: books, goToPage } = props;

  return (
    <div id="series_list_module" className="detail_box_module js_series_list_module">
      <div className="option_wrap js_series_list_option_wrap">
        <ul className="option_left">
          <li className="select_all_wrapper option_item">
            <input type="checkbox" id="series_select_all" className="rui_checkbox_input select_all_checkbox js_series_select_all" title="Select all series" />
            <label htmlFor="series_select_all" className="rui_checkbox_label select_all_label"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>전체 선택</font></font>
            </label>
          </li>
          <li className="option_item">
            <button type="button" className="rui_button_white_30 sort_reverse_button js_series_sort_reverse"><span className="icon-reverse_1" /><span className="js_reverse_text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>신간부터</font></font></span>
            </button>
          </li>
        </ul>
        <div className="option_right">
          <ul>
            <li className="option_item">
              <p className="option_info"><span className="info_volume"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>총 </font></font>

                                                                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0총 </font></font>
                                                            </span><span className="info_price museo_sans js_selected_book_amount"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> 0원</font></font></span>
              </p>
            </li>
            <li className="option_item">
              <ul className="rui_button_group_5">
                <li className="rui_button_item">
                  <button type="button" className="rui_button_white_30 btnSelectedCart btn_cart js_add_cart_selected trackable" data-track-params="{&quot;section&quot;:&quot;series_list&quot;, &quot;obj_id&quot;: &quot;3240000001&quot;, &quot;u_id&quot;: &quot;&quot;, &quot;type&quot;:&quot;cart&quot;, &quot;tags&quot;:{&quot;action&quot;:&quot;add&quot;}, &quot;send_display&quot;:false}" data-track-type="ga"><span className="icon-cart_1" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>  카트</font></font>
                  </button>
                </li>
                <li className="rui_button_item">
                  <button type="button" className="rui_button_blue_30 btn_buy js_selected_serial_books_buy"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>선택 구매</font></font>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" className="view_previous_button js_view_previous_button hidden"> <span className="indent_hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Previous list more</font></font></span><span className="icon-more_list" />
      </button>
      <div id="SeriesListWrap" className="series_list_wrapper">
        <ul className="module_compact_book_list white_theme js_compact_book_list">
          {books.map((b) => (
            <li key={b.id} className="js_series_book_list detail_scalable_thumbnail" data-id={b.id} data-price={b.price} data-volume={1} data-service_type data-is-trial={0}>
              <div className="book_list_wrapper" data-is-kpc={0}>
                <div className="table_wrapper">
                  <div className="table_cell book_checkbox">
                    <input id={b.id} type="checkbox" className="rui_checkbox_input js_book_checkbox_input" title={b.text} />
                    <label className="rui_checkbox_label select_book_label js_select_book_label "> <span className="indent_hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>{b.text}</font></font></span>
                    </label>

                  </div>
                  <div className="table_cell book_info">
                    <h3 className="info_title">
                      <span className="js_book_title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>{b.text}</font></font></span>
                    </h3>
                    <div>
                      <ul className="info_list_wrapper">
                        <li className="info_reg_date"><span className="indent_hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Registration date </font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>  2017.12.20.
                        </font></font>
                        </li>
                        <li className="info_size"><span className="indent_hidden"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Volume </font></font></span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>24 MB</font></font>
                        </li>
                      </ul>
                      <p className="info_price"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                        {b.price}
                      </font></font>
                      </p>
                    </div>
                  </div>
                  <div className="table_cell book_status direct_view_wrapper">
                    <button type="button" className="rui_button_white_30 serial_book_direct_view_button js_web_view_direct_view_button"
                            data-book-id={b.id}
                            onClick={()=>{props.goToPage('https://view.ridibooks.com/books/3240000001')}}
                    >
                      <span className="icon-book_1 icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> {b.status}
                    </font></font>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul id="series_multi_select_tooltip" className="js_series_multi_select_tooltip" data-unit="화">
          <li className="tooltip_list">
            <button className="tooltip_button js_multi_select_button" type="button" />
          </li>
        </ul>
      </div>
      <div className="button_wrap series_more_button js_series_next_button_wrapper">
        <button type="button" className="rui_button_white_50 view_all_series_button js_series_next_button">더보기<span className="icon-arrow_1_down" />
        </button>
      </div>
    </div>
  );
}
