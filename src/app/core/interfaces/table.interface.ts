export interface GridView {
  tableFields?: TableFiled[];
  operations?: Operation[];
}

/**
 * @field 字段
 * @text  显示名称
 * @type 字段类型 {1:text,2:操作,3:图片,4：过滤器}
 */
export interface TableFiled {
  field?: string;
  text: string;
  type?: number;
}

export interface Operation {
  text: string;
  key?: string;
  isConfirm?: boolean;
  title?: string;
  event: any;
}
