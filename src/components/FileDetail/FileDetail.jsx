import React from "react";
import "./FileDetail.scss";
import Rating from '@material-ui/lab/Rating';
import { Button, LinearProgress, FormControlLabel, Checkbox } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import WarningIcon from '@material-ui/icons/Warning';
import books from '../../dummyData/FileDetail.js';


export default function FileDetail() {
    return (
        <div id="books_contents">
        <div>
            <div id="page_detail">
                <div className="detail_wrap">
                    <div className="detail_body_wrap">
                        <section className="detail_body">
                            <article className="detail_header trackable" data-track-params="{&quot;section&quot;:&quot;detail&quot;, &quot;obj_id&quot;: &quot;3240000001&quot;, &quot;type&quot;:&quot;product&quot;, &quot;tags&quot;:{&quot;name&quot;: &quot;어느 날 공주가 되어버렸다 1화&quot;}}" data-track-type="ga,echo">
                                <div className="header_info_wrap">
                                    <p className="info_category_wrap">
                                        <a href="/category/1500"> <font style={{ verticalAlign: 'inherit' }}>만화</font>
                                        </a><span aria-hidden="true" className="icon-arrow_2_right" />
                                        <a href="/category/1521"> <font style={{ verticalAlign: 'inherit' }}>국내 순정</font>
                                        </a><span aria-hidden="true" className="icon-arrow_2_right" /> <a href="/category/1523"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>코믹</font></font></a>
                                    </p>
                                    <div className="info_title_wrap">
                                        <h3 className="info_title_wrap"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>[웹툰] 어느 날 공주가 되어버렸다</font></font></h3>
                                    </div>
                                    <div className="info_metadata_wrap">
                                        <p className="metadata_rate"> <span className="RSGBookMetadata_StarRate"><span className="StarRate_IconBox">
                                                        <span className="StarRate_IconFill" style={{ width: '96%' }} /></span>
                                            <span className="StarRate_Score">
                                                            <font style={{ verticalAlign: 'inherit' }}>4.7점</font>
                                                           </span><span className="StarRate_ParticipantCount"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>20,361 </font></font><span className="StarRate_ParticipantCount_Unit"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>명</font></font></span></span><span className="StarRate_HiddenElement"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Participation</font></font></span></span>
                                        </p>
                                    </div>
                                    <div className="info_metadata_wrap">
                                        <p className="metadata metadata_writer"> <span className="metadata_item author_item_wrapper">
                                                        <a className="js_author_detail_link author_detail_link" href="/author/88464">
                                                            <font style={{ verticalAlign: 'inherit' }} /></a><font style={{ verticalAlign: 'inherit' }} /></span>
                                            <font style={{ verticalAlign: 'inherit' }}><span className="metadata_item author_item_wrapper"><font style={{ verticalAlign: 'inherit' }}>           그림 </font>
                                            </span><span className="metadata_item author_item_wrapper"><a className="js_author_detail_link author_detail_link" href="/author/88464"><font style={{ verticalAlign: 'inherit' }}>플루토스</font></a></span><span className="metadata_item author_item_wrapper"><font style={{ verticalAlign: 'inherit' }}>            플루토스 </font></span>
                                            </font><span className="metadata_item author_item_wrapper"><a className="js_author_detail_link author_detail_link" href="/author/88463"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>플루토스</font></font></a><font style={{ verticalAlign: 'inherit' }} /></span>
                                        </p>
                                        <p className="metadata file_info publisher_info"> <a className="publisher_detail_link" href='  /search?q=%EC%B6%9C%ED%8C%90%EC%82%AC%3ACARROTOON
    '><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>CARROTOON</font></font></a><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>  출판
        
                          </font></font>
                                        </p>
                                        <p className="metadata metadata_info_series_complete_wrap"> <span className="metadata_item book_count"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>총 74화 </font></font></span>
                                        <span className="metadata_item not_complete"><font style={{ verticalAlign: 'inherit' }}>미완결</font></span> 
                                        </p>
                                    </div>
                                    <div id="select_info_component" />
                                    <div id="notice_component">
                                        <div className="BookDetailNotice">
                                            <div className="BookDetailNotice_List">
                                                <h4 className="BookDetailNotice_List_Header BookDetailNotice_List_Header-schedule"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>연재</font></font></h4>
                                                <ul className="BookDetailNotice_List_Group">
                                                    <li className="BookDetailNotice_List_Item BookDetailNotice_List_Item-notice">
                                                        <h5 className="BookDetailNotice_List_Item_Title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>매월 10,20,30일 연재 / 5회 연재 시 1회 휴재</font></font></h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="BookDetailNotice_List">
                                                <h4 className="BookDetailNotice_List_Header BookDetailNotice_List_Header-events"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>이벤트</font></font></h4>
                                                <ul className="BookDetailNotice_List_Group">
                                                    <li className="BookDetailNotice_List_Item BookDetailNotice_List_Item-event"><a href="/event/10981"><h5 className="BookDetailNotice_List_Item_Title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>단편&연재 순정만화 한 곳에서 모아보기!</font></font></h5></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_buttons_wrap js_all_book_buttons_wrap js_web_view_direct_view_button_wrapper">
                                        <button type="button" className="rui_button_blue_50 serial_book_direct_view_button js_web_view_direct_view_button" data-book-id={3240000001}><span className="icon-book_1 icon" /> <span className="js_direct_view_button_title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>첫화보기</font></font></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="header_thumbnail_wrap">
                                    <div className="header_thumbnail book_macro_200 detail_scalable_thumbnail">
                                        <div className="book_thumbnail_wrapper" data-book_id_for_tracking={3240000001}>
                                            <div className="book_thumbnail">
                                                <div className="thumbnail_image">
                                                    <img className="thumbnail " src="//img.ridicdn.net/cover/3240000075/xxlarge" alt="One Day To Become a Princess Episode 1" data-src="//img.ridicdn.net/cover/3240000075/xxlarge" data-original-cover="//img.ridicdn.net/cover/3240000075/xxlarge" /><span className="border" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header_preference">
                                        <button type="button" className="rui_button_white_40 preference_button js_preference_button remove"> <span className="button_contents">
                                                        <span className="button_icon" />
                                                        <span className="button_text js_preference_count"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>39,032</font></font></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <hr className="clear_both" />
                                <div className="Header_Metadata_Block">
                                    <ul className="Header_Metadata_List" title="Publication and file information">
                                        <li className="Header_Metadata_Item book_info published_date_info"><span className="Header_Metadata_Type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>출간 정보</font></font></span>
                                            <ul className="Header_Metadata_Detail_List">
                                                <li className="published_date_info Header_Metadata_Detail_Item">
                                                   <font style={{ verticalAlign: 'inherit' }}>  2017.12.20.출간</font>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="Header_Metadata_Item book_info"><span className="Header_Metadata_Type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>파일 정보</font></font></span>
                                            <ul className="Header_Metadata_Detail_List">
                                                <li className="file_info file_size_info Header_Metadata_Detail_Item-inline-separated"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>평균 36.5MB</font></font>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="Header_Metadata_List" title="Supported devices and features">
                                        <li className="Header_Metadata_Item">
                                            <p className="metadata_support_tts_info"><span className="info_title Header_Metadata_Type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>듣기 기능</font></font></span><span className="Header_Metadata_Detail tts_info"><span className="Header_Metadata_Detail_Item_Icon icon-tts_2" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>미지원</font></font></span>
                                            </p>
                                        </li>
                                        <li className="Header_Metadata_Item">
                                            <div className="metadata_support_device_info"><span className="info_title Header_Metadata_Type"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>지원 기기</font></font></span>
                                                <ul className="device_info_list_wrapper Header_Metadata_Detail_List">
                                                    <li className="Header_Metadata_Detail_Item-inline available_wrapper strikethrough"><span className="icon-paper_1 available_os Header_Metadata_Detail_Item_Icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>PAPER
                                </font></font>
                                                    </li>
                                                    <li className="Header_Metadata_Detail_Item-inline available_wrapper"><span className="icon-ios available_os Header_Metadata_Detail_Item_Icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>iOS
                                </font></font>
                                                    </li>
                                                    <li className="Header_Metadata_Detail_Item-inline available_wrapper"><span className="icon-android available_os Header_Metadata_Detail_Item_Icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Android
                                </font></font>
                                                    </li>
                                                    <li className="Header_Metadata_Detail_Item-inline available_wrapper strikethrough"><span className="icon-windows available_os Header_Metadata_Detail_Item_Icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>PC
                                </font></font>
                                                    </li>
                                                    <li className="Header_Metadata_Detail_Item-inline available_wrapper strikethrough"><span className="icon-osx available_os Header_Metadata_Detail_Item_Icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Mac
                                </font></font>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article id="detail_series" className="detail_series js_detail_series_list">
                                <div className="rsg_title01 hidden">
                                    <h3 className="title_text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Series of books</font></font></h3>
                                </div>
                                <form id="formSeriesList" className="js_form_series_list" action="/order/checkout" method="post">
                                    <input type="hidden" name="t" defaultValue={1590590113} />
                                    <input type="hidden" name="act" defaultValue="buy" />
                                    <div className="series_buy_tab">
                                        <ul className="rsg_tab01">
                                            <li>
                                                <div className="link_wrap"> <a className href="/books/3240000001?type=rent#formSeriesList"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>대여하기</font></font></a>{/* active class 붙여서 활성화 */}</div>
                                            </li>
                                            <li>
                                                <div className="link_wrap"> <a className="active" href="/books/3240000001?type=buy#formSeriesList"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>구매하기</font></font></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


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
                                        <button type="button" className="rui_button_white_30 serial_book_direct_view_button js_web_view_direct_view_button" data-book-id={b.id}><span className="icon-book_1 icon" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> {b.status}
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


                                </form>
                            </article>
                            <article className="detail_box_module detail_introduce_author js_detail_introduce_author">
                                <div className="author_wrapper">
                                    <div className="author_books_wrapper">
                                        <div className="header_wrapper">
                                            <h4 className="header_title">Representative work</h4>
                                            <ul className="books_filter">
                                                <li><a className="active" href="?author_id=88464&order=selling">Popularity</a>
                                                </li>
                                                <li><a href="?author_id=88464&order=recent">Newest</a>
                                                </li>
                                                <li><a href="?author_id=88464&order=grade">Rating</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="books_wrapper">
                                            <div className="bookmacro_wrapper book_macro_90 book_macro_portrait book_macro_column_5">
                                                <div className="book_thumbnail_wrapper" data-book_id_for_tracking={3240000001}>
                                                    <div className="book_thumbnail">
                                                        <div className="thumbnail_image">
                                                            <img className="thumbnail lazyload" src="https://store.ridicdn.net/books/dist/images/book_cover/cover_lazyload.png" alt="One Day To Become a Princess Episode 1" data-src="//img.ridicdn.net/cover/3240000075/large" data-original-cover="//img.ridicdn.net/cover/3240000075/large" /><span className="border" />
                                                        </div> <span className="badge_free_book_count">
                                                                    <span className="free_num">
                                                                        <span className="num museo_sans">6</span>화 <span className="free_text">무료</span>
                                                        </span>
                                                        </span>
                                                        <a className="thumbnail_btn trackable" href="/books/3240000001" data-track-params data-track-type="beacon,ga"> <span className="indent_hidden">상세페이지 바로가기</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="book_metadata_wrapper">
                                                    <h3 className="book_metadata meta_title ">
                                                                <a className="title_link trackable" href="/books/3240000001" data-track-params=",&quot;send_display&quot;:false}" data-track-type="beacon,ga">
                                                                    <span className="title_text js_highlight_helper">
                                                                                   
                                      [Webtoon] One day she became a princess
                        
                                </span>
                                                                </a>
                                                            </h3>
                                                    <p className="book_metadata star_rate hidden_for_landscape"><span className="RSGBookMetadata_StarRate"><span className="StarRate_IconBox"><span className="StarRate_IconFill" style={{ width: '96%' }} /></span><span className="StarRate_Score">4.8점</span><span className="StarRate_ParticipantCount">20,361<span className="StarRate_ParticipantCount_Unit">people</span></span><span className="StarRate_HiddenElement">참여</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="bookmacro_wrapper book_macro_90 book_macro_portrait book_macro_column_5">
                                                <div className="book_thumbnail_wrapper" data-book_id_for_tracking={111016845}>
                                                    <div className="book_thumbnail">
                                                        <div className="thumbnail_image">
                                                            <img className="thumbnail lazyload" src="https://store.ridicdn.net/books/dist/images/book_cover/cover_lazyload.png" alt="One day the reader asked" data-src="//img.ridicdn.net/cover/111016845/large" data-original-cover="//img.ridicdn.net/cover/111016845/large" /><span className="border" />
                                                        </div>
                                                        <a className="thumbnail_btn trackable" href="/books/111016845" data-track-params data-track-type="beacon,ga"> <span className="indent_hidden">상세페이지 바로가기</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="book_metadata_wrapper">
                                                    <h3 className="book_metadata meta_title ">
                                                                <a className="title_link trackable" href="/books/111016845" data-track-params=",&quot;send_display&quot;:false}" data-track-type="beacon,ga">
                                                                    <span className="title_text js_highlight_helper">
                                                                                    
                            One day the reader asked
                
                                </span>
                                                                </a>
                                                            </h3>
                                                    <p className="book_metadata star_rate hidden_for_landscape"><span className="RSGBookMetadata_StarRate"><span className="StarRate_IconBox"><span className="StarRate_IconFill" style={{ width: '0%' }} /></span><span className="StarRate_HiddenElement">참여</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="clear_both" />
                                        </div>
                                        <hr className="clear_both" />
                                    </div>
                                    <div className="spinner_wrapper" />
                                    <div className="spin" /></div>
                            </article>
                            <hr />
                        </section>
                    </div>
                    <div className="detail_aside_wrap">
                        <aside className="detail_aside">
                            <div className="aside_banner"></div>
                            <hr className="hidden" />
                            <div className="aside_contents aside_best">
                                <h2 className="aside_contents_title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>국내 순정 베스트셀러</font></font></h2>
                                <ul>
                                    <li>
                                        <a href="/books/3240000001?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:0,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\uc5b4\ub290 \ub0a0 \uacf5\uc8fc\uac00 \ub418\uc5b4\ubc84\ub838\ub2e4 1\ud654&quot;,&quot;brand&quot;:&quot;CARROTOON&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;3240000001&quot;,&quot;rep_title&quot;:&quot;\uc5b4\ub290 \ub0a0 \uacf5\uc8fc\uac00 \ub418\uc5b4\ubc84\ub838\ub2e4&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;3240000001&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>1위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [웹툰] 유실물
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/3719000010?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:1,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\uc720\uc2e4\ubb3c \uc778\ubb3c \uc18c\uac1c&quot;,&quot;brand&quot;:&quot;\ub85c\uc988\uc5d4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;3719000010&quot;,&quot;rep_title&quot;:&quot;\uc720\uc2e4\ubb3c&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;3719000010&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>2위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                            
                          [웹툰] 어느 날 공주가 되어버렸다
                        
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/1746011985?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:2,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\uc591\uc758 \uc0ac\uc218 \ud504\ub864\ub85c\uadf8&quot;,&quot;brand&quot;:&quot;\u321c\uc7ac\ub2f4\ubbf8\ub514\uc5b4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;1746011985&quot;,&quot;rep_title&quot;:&quot;\uc591\uc758 \uc0ac\uc218&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;1746011985&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>3위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [웹툰] 양의 사수
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/1746010575?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:3,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\ud558\uc9c0\uc810 \ud504\ub864\ub85c\uadf8&quot;,&quot;brand&quot;:&quot;\u321c\uc7ac\ub2f4\ubbf8\ub514\uc5b4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;1746010575&quot;,&quot;rep_title&quot;:&quot;\ud558\uc9c0\uc810&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;1746010575&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>4위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [웹툰] 하지점
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/3719000001?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:4,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\uace0\ubc31\ubc95 \ud504\ub864\ub85c\uadf8&quot;,&quot;brand&quot;:&quot;\ub85c\uc988\uc5d4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;3719000001&quot;,&quot;rep_title&quot;:&quot;\uace0\ubc31\ubc95&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;3719000001&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>5위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                     
                          [웹툰] 고백법
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/3393000015?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:5,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\ub808\uc774\ub514 \ubca0\uc774\ube44 \ud504\ub864\ub85c\uadf8&quot;,&quot;brand&quot;:&quot;\ucd08\ucf54\ubbf8\ub514\uc5b4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;0&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;3393000015&quot;,&quot;rep_title&quot;:&quot;\ub808\uc774\ub514 \ubca0\uc774\ube44&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;3393000015&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>6위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                                                            
                          [웹툰] 레이디 베이비
                        
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/1434008442?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:6,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\ub0b4\uba85\ubd80\uc758 \ub09c 1\ud654&quot;,&quot;brand&quot;:&quot;\ud0a4\ub2e4\ub9ac\uc2a4\ud29c\ub514\uc624&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;600&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;1434008442&quot;,&quot;rep_title&quot;:&quot;\uc870\uc120 \ub2e8\ud3b8\uc120 [\uc21c\uc815]&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;1434008442&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>7위  </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [연재] 배덕의 밤
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/565026686?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:7,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\ubc30\ub355\uc758 \ubc24 1\ud654&quot;,&quot;brand&quot;:&quot;\uac00\ud558&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;600&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;565026686&quot;,&quot;rep_title&quot;:&quot;\ubc30\ub355\uc758 \ubc24&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;565026686&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>8위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [웹툰] 조선 단편선 [순정]
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/845018212?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:8,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\uc2a4\uc717 \ub4dc\ub9bc(Sweet Dream) 1\ud654&quot;,&quot;brand&quot;:&quot;\uc11c\uc6b8\ubbf8\ub514\uc5b4\ucf54\ubbf9\uc2a4&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;500&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;845018212&quot;,&quot;rep_title&quot;:&quot;\uc2a4\uc717 \ub4dc\ub9bc(Sweet Dream)&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:false},&quot;obj_id&quot;:&quot;845018212&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>9위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [웹툰] 스윗 드림(Sweet Dream)
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/books/1561005729?_s=category_best&_s_id=3240000001" className="trackable" data-track-params="{&quot;section&quot;:&quot;bestseller&quot;,&quot;idx&quot;:9,&quot;u_id&quot;:false,&quot;type&quot;:&quot;impression&quot;,&quot;tags&quot;:{&quot;name&quot;:&quot;\ubc14\ubcf4\uac1c\uc640 \uc544\uac00\uc528 1\ud654&quot;,&quot;brand&quot;:&quot;\uc774\ubbf8\uc9c0\ud504\ub808\uc784&quot;,&quot;genre&quot;:&quot;comic&quot;,&quot;genre_kor&quot;:&quot;\ub9cc\ud654&quot;,&quot;category&quot;:&quot;\ub9cc\ud654\/\uad6d\ub0b4 \uc21c\uc815&quot;,&quot;price&quot;:&quot;500&quot;,&quot;quantity&quot;:1,&quot;rep_id&quot;:&quot;1561005729&quot;,&quot;rep_title&quot;:&quot;\ubc14\ubcf4\uac1c\uc640 \uc544\uac00\uc528&quot;,&quot;rcmd_id&quot;:&quot;&quot;,&quot;is_checkpoint&quot;:false,&quot;is_last_item&quot;:true},&quot;obj_id&quot;:&quot;1561005729&quot;}" data-track-type="beacon,ga"> <span className="best_rank"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>10위 </font></font></span>
                                            <span className="best_title">
                                                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>
                          [연재] 바보개와 아가씨
                              </font></font></span>
                                            <span className="title_fadeout" /></span>
                                        </a>
                                    </li>
                                </ul> <a className="best_more_btn" href="/category/bestsellers/1521"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>View more</font></font><span className="icon-arrow_1_right" /></a>
                            </div>
                            <hr className="hidden" />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        <div id="BlogReview">
                <div className="blog-review-main">
                    <div className="review-left">
                        <div className="left-title">구매자 별점</div>
                        <div className="left-ratting-div">
                            <div className="ratting-score">4.5</div>
                            <Rating name="size-large" defaultValue={4.5} size="large" />
                        </div>
                        <div className="ratting-info">
                            <div className="ratting-list">
                                <div><StarIcon fontSize="inherit" /></div>
                                <div className="ratting-number">5</div>
                                <LinearProgress variant="determinate" value={80} />
                            </div>
                            <div className="ratting-list">
                                <div><StarIcon fontSize="inherit" /></div>
                                <div className="ratting-number">4</div>
                                <LinearProgress variant="determinate" value={70} />
                            </div>
                            <div className="ratting-list">
                                <div><StarIcon fontSize="inherit" /></div>
                                <div className="ratting-number">3</div>
                                <LinearProgress variant="determinate" value={50} />
                            </div>
                            <div className="ratting-list">
                                <div><StarIcon fontSize="inherit" /></div>
                                <div className="ratting-number">2</div>
                                <LinearProgress variant="determinate" value={30} />
                            </div>
                            <div className="ratting-list">
                                <div><StarIcon fontSize="inherit" /></div>
                                <div className="ratting-number">1</div>
                                <LinearProgress variant="determinate" value={10} />
                            </div>
                        </div>
                        <div className="total-rate">
                            <strong>20,329</strong>명이 평가함
                        </div>
                    </div>
                    <div className="review-right">
                        <div className="review-heading"> 이 블로그를 평가해주세요! </div>
                        <div className="right-ratting-div">
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </div>
                        <div className="review-text-area">
                            <textarea name="content" title="리뷰 입력" placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다.">
                            </textarea>
                        </div>
                        <div className="bottom-div">
                            <div className="bottom-left">
                                <Button variant="contained" variant="outlined"><WarningIcon fontSize="inherit" />리뷰 작성 유의사항</Button>

                            </div>
                            <div className="bottom-right">
                                <FormControlLabel
                                    value="1"
                                    className="checkbox-style"
                                    control={<Checkbox color="primary" />}
                                    label="스포일러가 있습니다."
                                    labelPlacement="right"
                                />
                                <Button variant="contained" className="right-buttom-style" variant="outlined"><WarningIcon fontSize="inherit" /> 리뷰 남기기 </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    );

}
