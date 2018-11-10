module.exports = {
    ra: {
        action: {
            delete: '刪除',
            show: '顯示',
            list: '列表',
            save: '保存',
            create: '新建',
            edit: '編輯',
            sort: '排序',
            cancel: '取消',
            undo: '回復',
            refresh: '重整',
            add: '增加',
            remove: '刪除',
            add_filter: '增加過濾',
            remove_filter: '刪除過濾',
            back: '上一頁',
            bulk_actions: '挑選%{smart_count}個',
        },
        boolean: {
            true: '是',
            false: '否',
        },
        page: {
            list: '%{name} 列表',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '新建 %{name}',
            dashboard: '看板',
            not_found: '沒找到',
            loading: '載入中',
        },
        input: {
            file: {
                upload_several:
                    '拖放多個檔案或點擊上傳.',
                upload_single: '拖放一個檔案或點擊上傳.',
            },
            image: {
                upload_several:
                    '拖放多張圖片或點擊上傳.',
                upload_single:
                    '拖放一張圖片或點擊上傳.',
            },
            references: {
                all_missing: '沒找到參考資料',
                many_missing:
                    '沒找到多筆參考資料',
                single_missing:
                    '沒找到這筆參考資料',
            },
        },
        message: {
            yes: '是',
            no: '否',
            are_you_sure: '是否確認執行?',
            about: '關於',
            not_found:
                '你可能輸入錯誤的連結.',
            loading: '頁面載入中, 請稍後.',
            invalid_form: '表單輸入無效. 請參考錯誤通知',
            delete_title: '刪除 %{name} #%{id}',
            delete_content: '是否確認刪除這筆資料?',
            bulk_delete_title:
                '刪除 %{name} |||| 刪除 %{smart_count}個 %{name} ',
            bulk_delete_content:
                '是否確認刪除 %{name}? |||| 是否確認刪除 %{smart_count} 個?',
        },
        navigation: {
            no_results: '找不到結果',
            no_more_results:
                '頁%{page}不在範圍內. 可以試試上一頁.',
            page_out_of_boundaries: '頁%{page}不在範圍內',
            page_out_from_end: '超過最後一頁',
            page_out_from_begin: '超出第一頁',
            page_range_info: '%{offsetBegin}-%{offsetEnd} 共 %{total}',
            next: '下一頁',
            prev: '上一頁',
        },
        auth: {
            username: '使用者名稱',
            password: '密碼',
            sign_in: '登入',
            sign_in_error: '驗證失敗, 請重試',
            logout: '登出',
        },
        notification: {
            updated: '已更新資料 |||| %{smart_count} 筆資料已更新',
            created: '已新建資料',
            deleted: '已刪除資料 |||| %{smart_count} 筆資料已刪除',
            bad_item: '錯誤資料',
            item_doesnt_exist: '資料不存在',
            http_error: '伺服器連線錯誤',
            canceled: '取消操作',
        },
        validation: {
            required: '必填',
            minLength: '最少%{min}個字',
            maxLength: '最多%{max}個字',
            minValue: '最小值為%{min}',
            maxValue: '最大值為%{max}',
            number: '必須是數字',
            email: '必須是有效的電子郵件',
            oneOf: '必須是: %{options}其中一個',
            regex: '必須符合指定的格式 (regexp): %{pattern}',
        },
    },
};