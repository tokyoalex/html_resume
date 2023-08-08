  var langAbbrev = "ja";

  var companyHist = {"seaos" : { months: 26, experience: {
                                            languages:[{language: 'javascript', percent: 15}, 
                                                        {language: 'php', percent: 15}, 
                                                        {language: 'objective-c', percent: 10}, 
                                                        {language: 'mysql', percent: 10},                                                         
                                                        {language: 'java', percent: 40}, 
                                                        {language: 'python', percent: 5}, 
                                                        {language: 'swift', percent: 5}], 
                                            scripting:['python', 'perl', 'bash shell script', 'boto3'],
                                            frameworks:['play framework', 'jquery', 'bootstrap', 'cakephp', 'angularjs', 'nodejs', 'cordova', 'hibernate', 'doma', 'sqlite'],                                 
                                            platforms: ['Android', 'AWS (EC2, Cognito, S3, IAM, Lambda, API Gateway, VPC, Athena)','OSX', 'iOS', 'Linux Centos', 'Linux Ubuntu', 'web browsers'],
                                            devTools: ['Android studio','Eclipse', 'Intellij', 'Xcode', 'Sublime text', 'Vagrant', 'Gapdebug', 'Mysql workbench', 'Xampp'],
                                            versionControl : ['Git', 'Sourcetree', 'Bitbucket']}},
                      "ultra electronics" : { months: 17, experience: { 
                                            languages:[{language: 'c++', percent: 90}, 
                                                        {language: 'oracle sql', percent: 5}, 
                                                        {language: 'perl', percent: 5}],  
                                            scripting:['perl'],                                          
                                            frameworks:['borland UI builder', 'STL'],                                 
                                            platforms: ['Windows', 'Unix'],
                                            devTools: ['borland 6 IDE', 'kdiff', 'sharepoint', 'sublime text'],
                                            versionControl : ['Subversion', 'Tortoise SVN']}},
                      "barcrest" : { months: 50, experience: { 
                                            languages:[{language: 'c++', percent: 70}, 
                                                        {language: 'c#', percent: 15}, 
                                                        {language: 'c', percent: 5}, 
                                                        {language: 'oracle sql', percent: 5}, 
                                                        {language: 'perl', percent: 5}],    
                                            scripting:['perl', 'bash shell script'],                                        
                                            frameworks:['Win32 api', 'winsocks', 'Boost', 'STL', 'SDL', 'OpenGL', '.Net'], 
                                            platforms: ['Windows XP Embedded', 'Windows XP'],
                                            devTools: ['Visual Studio 2008', 'kdiff'],
                                            versionControl : ['Subversion', 'Tortoise SVN', 'Sourcesafe']}},
                      "portrait software" : {months: 31, experience: { 
                                            languages:[{language: 'c++', percent: 65}, 
                                                        {language: 'c#', percent: 15},                                                         
                                                        {language: 'javascript', percent: 5},                                                         
                                                        {language: 'aspx', percent: 5},                                                         
                                                        {language: 'sql server', percent: 10}],  
                                            scripting:['perl', 'bash shell script'],                                                                                  
                                            frameworks:['.Net', 'COM', 'DCOM', 'ATL', 'MFC', 'STL', 'SOAP'],                                 
                                            platforms: ['Windows Server', 'Windows XP', 'IIS'],
                                            devTools: ['Visual Studio 6', 'Visual Studio 2005', 'microsoft virtual pc', 'sharepoint'],
                                            versionControl : ['Clearcase', 'Sourcesafe']}},
                      "neuxpower" : { months: 8, experience: { 
                                            languages:[{language: 'perl', percent: 40}, 
                                                        {language: 'php', percent: 40},                                                         
                                                        {language: 'javascript', percent: 5},  
                                                        {language: 'html', percent: 5},  
                                                        {language: 'mysql', percent: 10}],     
                                            scripting:['perl'],                                                                               
                                            frameworks:[],                                 
                                            platforms: ['Windows XP', 'Apache'],
                                            devTools: ['Visual Studio 6', 'notepad++'],
                                            versionControl : []}},
                      "lloyds tsb" : { months: 14, experience: { 
                                            languages:[{language: 'edge', percent: 100}],                                            
                                            scripting:[],                                        
                                            frameworks:[],                                 
                                            platforms: ['Windows XP'],
                                            devTools: ['emacs'],
                                            versionControl : []}}                                            
          };                                            


      var roleHistory = { 
                           en :  {  "seaos" : { dateFrom: "2015-02-02", dateTo: "Present", title: 'Software Engineer, I2A Team', location: 'Ebisu, Japan'},
                                    "ultra electronics" : { dateFrom: "2012-04-02", dateTo: "2013-08-20", title: 'Software Engineer II, HCI Team', location: 'Manchester, UK'},
                                    "barcrest" : {dateFrom: "2008-02-01", dateTo: "2012-04-01", title: 'Software Engineer, Gaming Systems', location: 'Manchester, UK'},
                                    "portrait software" : {dateFrom: "2005-07-01", dateTo: "2008-02-01", title: 'C++ Software Engineer', location: 'Oxfordshire, UK'},
                                    "neuxpower" : {dateFrom: "2004-03-01", dateTo: "2004-11-01", title: 'Developer', location: 'Watford, UK'},
                                    "lloyds tsb" : {dateFrom: "2001-07-01", dateTo: "2002-09-01", title: 'Programmer (Work Placement)', location: 'Manchester, UK'}
                                  },
                          ja : { "seaos" : { dateFrom: "年2015月02日02", dateTo: "現在", title: '開発者, I2Aチーム', location: '恵比寿, 東京都'},
                                  "ultra electronics" : { dateFrom: "年2012月04日02", dateTo: "年2013月08日20", title: 'シニア開発者, HCIチーム', location: 'マンチェースター, イギリス'},
                                  "barcrest" : {dateFrom: "年2008月02日01", dateTo: "年2012月04日01", title: '開発者, ゲーミングシステム', location: 'マンチェースター, イギリス'},
                                  "portrait software" : {dateFrom: "年2005月07日01", dateTo: "年2008月02日01", title: 'C++ 開発者', location: 'オックスフォードシャー, イギリス'},
                                  "neuxpower" : {dateFrom: "年2004月03日01", dateTo: "年2004月11日01", title: '開発者', location: 'ハートフォードシャー, イギリス'},
                                  "lloyds tsb" : {dateFrom: "年2001月07日01", dateTo: "年2002月09日01", title: 'プロクラマー (インターンシップ)', location: 'マンチェースター, イギリス'}
                                }
      };


      var stockAttrs = {   ultra :     { id:"LON:ULE", title: "Ultra Electronics Holdings plc", currency : "£", cid :11171838 },
                        barcrest :  { id: "NASDAQ:SGMS", title: "Scientific Games Corp", currency : "$",  cid :599680 },
                        portrait :  { id: "NYSE:PBI", title: "Pitney Bowes Inc.", currency : "$",  cid :28936 },
                        lloyds :    { id: "LON:LLOY", title: "Lloyds Banking Group PLC", currency : "£",  cid :8873270 }
      };
          
      var contactInfo = { en : { name: "Alexander Brian Fletcher", dob : "13th August 1981", address : "165-0034, Nakanoku, 1-63-8, Yamatocho, 102 Furu-ru Koenji, Tokyo, Japan", lang1 : "English (British) - Native", lang2 : "Japanese - around JLPT N2"},
                          ja : { name: "フレッチャー・アレグザンダー・ブライアン", dob : "年1981月8日13", address : "165-0034, 東京都、中野区、大和町、1-63-8, フルール高円寺、102", lang1 : "英語 (イギリス人)", lang2 : "日本語 - ほぼJLPT N2"}
      };

      
      function collateLanguageExperience(empLen, languageCollection, languageExp)
      {
        $.each(languageCollection, function(index, languageDetail)
        {
          var monthsExp = empLen * (languageDetail.percent / 100);
          var langName = languageDetail.language.toLowerCase();
         
          if(languageExp[langName] !== undefined)
          {
             languageExp[langName] += monthsExp; 
          }
          else
          {                
            languageExp[langName] = monthsExp; 
          }                   
        });
      };


      function getTotalExperience()
      {
        var languageExp = {};

        $.each(companyHist, function(index, historyItem)
        {
          var empLen = historyItem.months;

          collateLanguageExperience(empLen, historyItem.experience.languages, languageExp);        
        });

        return languageExp;
      };

      function getCompanyExperience(companyName)
      {
        var languageExp = {};
        companyNameLc = companyName.toLowerCase();

        var empLen = companyHist[companyNameLc].months;

        collateLanguageExperience(empLen, companyHist[companyNameLc].experience.languages, languageExp);        

        return languageExp;
      };


      function openSummary()
      {
        // populate the summary table first so can use its height for chart
        populateSummaryTable();

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawSummaryChart);

        

      };


      function populateSummaryTable()
      {
        var platformList = [];
        var frameworkList = [];
        var devToolList = [];
        var shellscriptList = [];
        var versionControlList = [];
        

        $.each(companyHist, function(index, historyItem)
        {         
          // PLATFORMS
          var currentPlatformArr = companyHist[index].experience.platforms;          
          $.each(currentPlatformArr, function(pIndex, pName)
          {
            if($.inArray(pName, platformList) === -1)
            {
              platformList.push(pName);
            }
          });
          

          // FRAMEWORKS
          var currentFrameworkArr = companyHist[index].experience.frameworks;          
          $.each(currentFrameworkArr, function(fIndex, fName)
          {
            if($.inArray(fName, frameworkList) === -1)
            {
              frameworkList.push(fName);
            }
          });

          
          var currentDevToolsArr = companyHist[index].experience.devTools;          
          $.each(currentDevToolsArr, function(dIndex, dName)
          {
            if($.inArray(dName, devToolList) === -1)
            {
              devToolList.push(dName);
            }
          });  


          var shellscriptArr = companyHist[index].experience.scripting;          
          $.each(shellscriptArr, function(dIndex, dName)
          {
            if($.inArray(dName, shellscriptList) === -1)
            {
              shellscriptList.push(dName);
            }
          });  


          var currentVersionContArr = companyHist[index].experience.versionControl;
          $.each(currentVersionContArr, function(dIndex, dName)
          {
            if($.inArray(dName, versionControlList) === -1)
            {
              versionControlList.push(dName);
            }
          });    
        });

        platformList.sort();
        frameworkList.sort();
        devToolList.sort();
        shellscriptList.sort();
        versionControlList.sort();

        // now add to summary table
        $('#profileSummary .platformList').html(platformList.join(", "));
        $('#profileSummary .frameworkList').html(frameworkList.join(", "));
        $('#profileSummary .devToolList').html(devToolList.join(", "));
        $('#profileSummary .shellscriptList').html(shellscriptList.join(", "));
        $('#profileSummary .versionControlList').html(versionControlList.join(", "));
      };


      
      function drawSummaryChart() 
      {
        // set initial header arr entry
        var expDataArr = [['Language', 'months', { role: 'style' } ]];

        var expDataObj = getTotalExperience();
        $.each(expDataObj, function(index, expItem)
        {
          var insertObj = [index, expItem, 'opacity: 0.2; color:#337ab7;'];
          expDataArr.push(insertObj);
        });

        var data = google.visualization.arrayToDataTable(expDataArr);

        // get the chart height based on the height of the skills div box
        var chartHeight = $('#summarySkillListDiv').height();

        var options = {          
         
          width: '100%',
          height: chartHeight,
          chartArea:{
              left:80,
              top: 10,
              width: '100%',
              height: '350',
          },
          legend: "none",        
          animation:{
            duration: 1000,
            easing: 'out',
            startup: true
          },
          hAxis: { gridlines: { count: 0}}                 
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('summary_chart'));
        chart.draw(data, options);
      };


      // access company.experience.list
      function getCompanyExperienceByList(companyName, listname)
      {        
        var expList = companyHist[companyName].experience[listname].toString();
        expList = expList.replace(/,/g, ', ');
        return expList;
      };



      function insertCompanyContent(companyName, companyID)
      {        
        var dateFromTo = roleHistory[langAbbrev][companyName].dateFrom;
        dateFromTo += (langAbbrev === "en") ?  ' - ' : "から";
        dateFromTo += roleHistory[langAbbrev][companyName].dateTo;

        var platformTitle = (langAbbrev === "en") ? "Platforms" : "プラットフォーム";
        var frameworkTitle = (langAbbrev === "en") ? "Frameworks" : "フレームワーク";
        var devToolsTitle = (langAbbrev === "en") ? "Dev Tools" : "開発のツール";
        var versionContTitle = (langAbbrev === "en") ? "Version Control" : "バージョン管理システム";
        var shellscriptTitle = (langAbbrev === "en") ? "Scripting" : "シェルスクリプト";
        


        var summaryhtml = '<br/><div class="row" style="margin-left: 50px">'+                          
                          ' <div class="col-xs-4"><h5 class="jobTitle">'+ roleHistory[langAbbrev][companyName].title +'</h5></div>'+
                          ' <div class="col-xs-4"><h5 class="companyLocation">'+ roleHistory[langAbbrev][companyName].location +'</h5></div>'+
                          ' <div class="col-xs-4"><h5 class="dateFromTo">'+ dateFromTo +'</h5></div>'+                          
                          '</div>'+                          
                          '<hr color="grey" style="height:5px; opacity:0.2;">' +
                          '<div class="row">' +
                            '<div class="col-xs-5">' +
                              '<div class="languageChart" style="width: 400px; height: 200px;"></div>' +
                            '</div>' +
                            '<div class="col-xs-7" style="margin-top: 13px">' +
                                '<table class="table table-striped platformTable">' +
                                  '<tbody>' +
                                    '<tr><td class="col-xs-3" style="font-weight: bold;">' + platformTitle + '</td><td class="col-xs-10 platformList"></td></tr>' +
                                    '<tr><td class="col-xs-3" style="font-weight: bold;">' + frameworkTitle + '</td><td class="col-xs-10 frameworkList"></td></tr>' +
                                    '<tr><td class="col-xs-3" style="font-weight: bold;">' + devToolsTitle + '</td><td class="col-xs-10 devToolList"></td></tr>' +
                                    '<tr><td class="col-xs-3" style="font-weight: bold;">' + shellscriptTitle + '</td><td class="col-xs-10 shellscriptList"></td></tr>' +                                    
                                    '<tr><td class="col-xs-3" style="font-weight: bold;">' + versionContTitle + '</td><td class="col-xs-10 versionControlList"></td></tr>' +                                    
                                  '</tbody>' +
                                '</table>' +       
                            '</div>' +
                          '</div>  <!-- row -->';

        $('#' + companyID + ' .companyContent').html(summaryhtml);

        // show() as set to hidden in html content
        $('#' + companyID + ' .companyContent').append($('#' + companyID + "_ProfileContent").clone().show());

        var responsibilityHeader = (langAbbrev==="en") ? "Responsibilities" : "役割";
        $(".responsibilityHeader").html(responsibilityHeader);

        var compProdProfileHeader = (langAbbrev==="en") ? "Company product profile" : "会社の製品プロファイル";
        $(".compProdProfile_header").html(compProdProfileHeader);
      };     


      // Flag to indicate whether popover open
      var updateStock = true;

      function getStockPrice(companyID)  
      {
        var gfStockUrl = "http://finance.google.com/finance/info?client=ig&q=" + stockAttrs[companyID].id;
        $.ajax( { url: gfStockUrl,
                      method: "POST",
                      dataType: "jsonp"
                      })

          .done(function(data) {
            // console.log( JSON.stringify(data) );

            $("#stock_datetime").html(data[0].lt);
            $("#stock_price").html(stockAttrs[companyID].currency + data[0].l);
            $("#stock_delta").html(data[0].cp_fix + "%");
            $('#stock_delta').removeClass('stockUp stockDown');
            $('#stock_delta').addClass(data[0].cp_fix.indexOf('-') >= 0 ? 'stockDown' : 'stockUp');    
          })
          .fail(function(xhr, textStatus, errorThrown) {
            console.error(xhr.responseText);
            console.error(textStatus);
            
          })
          .always(function() {
            
            if(updateStock) {              
              setTimeout( function(){ getStockPrice(companyID); }, 1000);
            }
            
          });
      }


      function openCompany(companyName, companyID)
      {        
        companyNameLc = companyName.toLowerCase();
        insertCompanyContent(companyNameLc, companyID);

        google.charts.setOnLoadCallback( function(){ drawCompanyExp(companyNameLc, companyID); } );

        // lets remove that skills table row if its empty...
        var tableContentKeys = { platforms : 'platformList', 
                                  frameworks : 'frameworkList',
                                  devTools :  'devToolList',
                                  scripting : 'shellscriptList',
                                  versionControl :'versionControlList' };

        $.each(tableContentKeys, function(listKey, cssClass)
        {          
          var list = getCompanyExperienceByList(companyNameLc, listKey);

          if(list.length < 1) 
          {
            $('#' + companyID + ' .' + cssClass).parent().remove();
          }
          else
          {
            $('#' + companyID + ' .' + cssClass).html(list);  
          }                    
        });    




        // no popover for companies not listed on stock market..
        if(stockAttrs[companyID] !== undefined)
        {
          // set initial empty values so popover sizes correctly above text
          var popoverContent="<div><div class='stockSVG'></div><a href='https://www.google.com/finance?cid=" + stockAttrs[companyID].cid + "' target='_blank'> " + stockAttrs[companyID].id + "</a></div>";        
          popoverContent += "<div id='stock_price' class='col-xs-6'>" + stockAttrs[companyID].currency + "0.00</div><div id='stock_delta' class='col-xs-6 stockUp'>0.00%</div>";
          popoverContent += "<div id='stock_datetime' class='stockDatetime'>loading...</div>";

          $("[data-toggle=popover]").popover({
            html:true,          
            delay : {"show":"200", "hide":"1000"},
            content : popoverContent,
            title: stockAttrs[companyID].title
          });


          $('.'+companyID+'_popover').on('click mouseenter', function () {    
              updateStock = true;        
              getStockPrice(companyID);
              
          });

          $('.'+companyID+'_popover').on('blur mouseleave', function () {
              updateStock = false;            
          });
        }

      };


      function openAdditionalInfo()
      {
        $('#additionalInfo').html($('#additionalContent').clone().show());
      };


      function drawCompanyExp(companyName, companyID) 
      {        
        // set initial header arr entry
        var expDataArr = [['Language', 'Percentage']];

        var expDataObj = getCompanyExperience(companyName);

        $.each(expDataObj, function(index, expItem)
        {
          var insertObj = [index, expItem];
          expDataArr.push(insertObj);
        });

        var data = google.visualization.arrayToDataTable(expDataArr);

        var title = (langAbbrev === "en") ? 'Experience by language' : "開発言語で経験";

        var options = {
          title: title,
          pieHole: 0.2,
          animation:{
            duration: 1000,
            easing: 'out',
            startup: true
          },
          
        };
        
        var chart = new google.visualization.PieChart($('#' + companyID   + ' .languageChart')[0]);
        chart.draw(data, options);
      };



      function insertProfilePic()
      {
        $('#profilePhoto').html(profilePhoto);   
      };

      

      function loadSection(sectionID, clickedBtnID, companyID, companyName)
      {        
        companyID = companyID === undefined ? 'Seaos' : companyID;
        companyName = companyName === undefined ? 'seaos' : companyName;

        $('.icon-bar a.active').removeClass('active');
        $('#' + clickedBtnID).addClass('active');        
        $('#contentMain').html($('#' + sectionID).clone().show());

        // for work exp tab, open first company
        if(clickedBtnID === 'btnWorkExp')     
        {
          // highlight the selected company name
          $('.company-bar li.active').removeClass('active');
          $('#' + companyName + "_menuItem").addClass('active');   

          // enable the selected company div so contents are displayed
          $('.tab-content div.active').removeClass('active');
          $('#' + companyName).addClass('active in');   

          openCompany(companyID, companyName);
        }

        else if(clickedBtnID === 'btnProfile')     
        {        
          openSummary();    // summary graph
        }

        else if(clickedBtnID === 'btnAdditional')     
        {
          openAdditionalInfo();
        }
      };

            
      function startCarousel() 
      {
        
        $('.multi-item-carousel').carousel({
          interval: 5000
        });


        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.multi-item-carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });   
      }      

      ///////////////////////////////////////////////////// I8N functions

      function loadContactInfo()
      {
        lang = langAbbrev;

        $("#contactInfoTable_name").html(contactInfo[lang].name);
        $("#contactInfoTable_dob").html(contactInfo[lang].dob);
        $("#contactInfoTable_address").html(contactInfo[lang].address);
        
        var langStr = contactInfo[lang].lang1 + "<br/>" + contactInfo[lang].lang2;
        $("#contactInfoTable_languages").html(langStr);
        
      }


      // NOTE: since html IDs are required to be unique, place language tags in positions that wont cause duplication
      function setLanguage() 
      {
        displayLang = langAbbrev;
        hiddenLang = (displayLang === "en") ? "ja" : "en";

        $("div:lang("+ displayLang +")").attr("hidden", false);
        $("div:lang("+ hiddenLang +")").attr("hidden", true);
      }

      ///////////////////////////////////////////////////// MAIN


      $(document).ready(function()
      {
        insertProfilePic();

        loadSection('profileSummary', 'btnProfile');     

        startCarousel();  

        // this covers both IE and other browsers, just get (en or ja)
        langAbbrev = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

        loadContactInfo();
        setLanguage();
        
      });     

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

