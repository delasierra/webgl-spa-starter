/**
 * Created by csierra on 2/6/18.
 */
export interface AppDataModel {
    id: number;
    general: {
        logo: string,
        title: string,
        description: string,
        hastags: Array<string>
    };
    screens: Array<object>;
}