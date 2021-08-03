namespace API
{

    export namespace RequestStruct 
	{
        export class OpenRequestStruct {
            id: string;
        }
    }

    export namespace ResponseStruct 
	{
        export class OpenResponseStruct {
            data1: string;
            data2: number;
        }
    }

    
    export class Test
	{ 
        public constructor() {
        }

        private static readonly BACK_URL = "";


        public getOpenControl(callBack:Function):any{
            let params = new API.RequestStruct.OpenRequestStruct();
            params.id = "al_test";
            this.post_request(params,callBack);
        }

        public post_request(requestPara:Object,callBack:Function):any{
            request( Test.BACK_URL, params, egret.URLRequestMethod.POST, function (data: any) {
                var responseData = JSON.parse(data.Data);
                callBack(responseData)
            }, function () {
			
            }, this);           
        }
    }
}
