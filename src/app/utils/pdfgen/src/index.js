const express = require("express");
const mapper = require("./mapper4.js")

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use("/", function (_, response) {
  response.render("index.hbs", mapper({
    "Id": 1937618,
    "MarketingProduct": {
      "Id": 1937173,
      "Alias": "my-qmobile-1-gb",
      "Modifiers": [
        {
          "Id": 19629,
          "Title": "Для основного сайта*",
          "Alias": "IsForMainSite",
          "HideInMarketingProducts": false,
          "HideInRegionalProducts": false
        }
      ],
      "Type": "MarketingTariff",
      "Segment": {
        "Id": 338809,
        "Title": "Частным клиентам",
        "Alias": "b2c"
      },
      "Category": {
        "Id": 1819489,
        "Title": "Для смартфона",
        "Alias": "phone",
        "Order": 10,
        "Type": "TariffCategory"
      },
      "Subcategories": [
        {
          "Id": 1922995,
          "Title": "Больше интернета",
          "Alias": "internet_nopay",
          "Order": 3,
          "Type": "TariffCategory"
        }
      ],
      "Title": "МЫ Qmobile +1 ГБ",
      "Description": "Подписка на связь, музыку, онлайн-кинотеатры и другие сервисы — выберите то, что нужно именно вам",
      "ListImage": "//storage.demo.dev.qsupport.ru/qmobile_catalog/contents/383/tarif-banner_3.jpg",
      "DetailsImage": "//storage.demo.dev.qsupport.ru/qmobile_catalog/contents/383/Banner-3.jpg"
    },
    "Regions": [
      {
        "Id": 19967,
        "Title": "Москва и Подмосковье",
        "Alias": "msk",
        "OldSiteId": 1826
      },
      {
        "Id": 19979,
        "Title": "PDA-версия сайта",
        "OldSiteId": 551791
      },
      {
        "Id": 338946,
        "Title": "Москва и Подмосковье",
        "Alias": "msk",
        "OldSiteId": 1731
      }
    ],
    "Parameters": [
      {
        "Id": 1937619,
        "Title": "Абонентская плата",
        "NumValue": 610.0,
        "BaseParameter": {
          "Id": 8476,
          "Title": "Абонентская плата",
          "Alias": "SubscriptionFee"
        },
        "Unit": {
          "Id": 8540,
          "Title": "рублей в месяц",
          "Display": "руб. в месяц",
          "QuotaPeriod": "monthly"
        },
        "Group": {
          "Id": 122994,
          "Title": "Обязательные платежи",
          "SortOrder": 0,
          "ImageSvg": {
            "Name": "b-icon_home-account.svg",
            "FileSizeBytes": 0,
            "AbsoluteUrl": "//storage.demo.dev.qsupport.ru/qmobile_catalog/contents/378/b-icon_home-account.svg"
          }
        }
      },
      {
        "Id": 1937620,
        "Title": "Звонки на номера Qmobile",
        "NumValue": 0.0,
        "Unit": {
          "Id": 8542,
          "Title": "рублей за минуту",
          "Display": "руб. за минуту",
          "Alias": "rub_per_minute",
          "QuotaUnit": "cu",
          "QuotaPeriod": "minutely"
        },
        "Group": {
          "Id": 1837521,
          "Title": "Звонки на все номера России",
          "SortOrder": 50
        }
      },
      {
        "Id": 1937621,
        "Title": "Звонки на номера других операторов",
        "NumValue": 3.0,
        "Unit": {
          "Id": 8542,
          "Title": "рублей за минуту",
          "Display": "руб. за минуту",
          "Alias": "rub_per_minute",
          "QuotaUnit": "cu",
          "QuotaPeriod": "minutely"
        },
        "Group": {
          "Id": 1837521,
          "Title": "Звонки на все номера России",
          "SortOrder": 50
        }
      },
      {
        "Id": 1937622,
        "Title": "SMS на номера Qmobile",
        "SortOrder": 10,
        "NumValue": 1.0,
        "Unit": {
          "Id": 8543,
          "Title": "рублей",
          "Display": "Р",
          "Alias": "rub",
          "QuotaUnit": "cu"
        },
        "Group": {
          "Id": 1936495,
          "Title": "SMS сообщения",
          "SortOrder": 80
        }
      },
      {
        "Id": 1937623,
        "Title": "SMS на номера других операторов",
        "SortOrder": 20,
        "NumValue": 5.0,
        "Unit": {
          "Id": 8543,
          "Title": "рублей",
          "Display": "Р",
          "Alias": "rub",
          "QuotaUnit": "cu"
        },
        "Group": {
          "Id": 1936495,
          "Title": "SMS сообщения",
          "SortOrder": 80
        }
      },
      {
        "Id": 1937624,
        "Title": "Пакет интернета",
        "NumValue": 2.0,
        "BaseParameter": {
          "Id": 8487,
          "Title": "Пакет интернета",
          "Alias": "InternetPackage"
        },
        "Unit": {
          "Id": 8547,
          "Title": "гигабайт в месяц",
          "Display": "Гб в месяц",
          "QuotaUnit": "gb",
          "QuotaPeriod": "monthly"
        },
        "Group": {
          "Id": 1641210,
          "Title": "Мобильный Интернет",
          "SortOrder": 10,
          "ImageSvg": {
            "Name": "b-icon_mobile-internet.svg",
            "FileSizeBytes": 0,
            "AbsoluteUrl": "//storage.demo.dev.qsupport.ru/qmobile_catalog/contents/378/b-icon_mobile-internet.svg"
          }
        }
      },
      {
        "Id": 1937625,
        "Title": "Входящие звонки на территории России",
        "NumValue": 0.0,
        "Unit": {
          "Id": 8542,
          "Title": "рублей за минуту",
          "Display": "руб. за минуту",
          "Alias": "rub_per_minute",
          "QuotaUnit": "cu",
          "QuotaPeriod": "minutely"
        },
        "Group": {
          "Id": 1814867,
          "Title": "Входящие звонки в Россию (за минуту)",
          "SortOrder": 20
        }
      },
      {
        "Id": 1937626,
        "Title": "Звонки на номера Qmobile",
        "SortOrder": 20,
        "NumValue": 300.0,
        "BaseParameter": {
          "Id": 8488,
          "Title": "Пакет минут",
          "Alias": "MinutesPackage"
        },
        "Modifiers": [
          {
            "Id": 19696,
            "Title": "Показывать в карточке",
            "Alias": "ShowInCard"
          },
          {
            "Id": 1835672,
            "Title": "Ключевой параметр тарифа",
            "Alias": "KeyParameter"
          }
        ],
        "Unit": {
          "Id": 8546,
          "Title": "минут в месяц",
          "Display": "минут в месяц",
          "QuotaUnit": "min",
          "QuotaPeriod": "monthly"
        },
        "Group": {
          "Id": 1837521,
          "Title": "Звонки на все номера России",
          "SortOrder": 50
        }
      },
      {
        "Id": 1937627,
        "Title": "SMS на номера любых операторов России",
        "SortOrder": 30,
        "NumValue": 100.0,
        "BaseParameter": {
          "Id": 8486,
          "Title": "Пакет сообщений",
          "Alias": "MessagesPackage"
        },
        "Modifiers": [
          {
            "Id": 19696,
            "Title": "Показывать в карточке",
            "Alias": "ShowInCard"
          },
          {
            "Id": 1835672,
            "Title": "Ключевой параметр тарифа",
            "Alias": "KeyParameter"
          }
        ],
        "Unit": {
          "Id": 8545,
          "Title": "сообщений в месяц",
          "Display": "сообщений в месяц",
          "QuotaUnit": "message",
          "QuotaPeriod": "monthly"
        },
        "Group": {
          "Id": 1937540,
          "Title": "SMS на номера России",
          "SortOrder": 70
        }
      },
      {
        "Id": 1937628,
        "Title": "Входящие звонки",
        "NumValue": 0.0,
        "Unit": {
          "Id": 8543,
          "Title": "рублей",
          "Display": "Р",
          "Alias": "rub",
          "QuotaUnit": "cu"
        },
        "Group": {
          "Id": 1937542,
          "Title": "Входящие звонки за минуту",
          "SortOrder": 40
        }
      },
      {
        "Id": 1937629,
        "Title": "Входящие звонки",
        "SortOrder": 0,
        "NumValue": 0.0,
        "Unit": {
          "Id": 8543,
          "Title": "рублей",
          "Display": "Р",
          "Alias": "rub",
          "QuotaUnit": "cu"
        },
        "Group": {
          "Id": 1937544,
          "Title": "Звонки на номера Qmobile доступны при любом балансе",
          "SortOrder": 60
        }
      },
      {
        "Id": 1937630,
        "Title": "Исходящие звонки",
        "SortOrder": 10,
        "NumValue": 0.0,
        "Unit": {
          "Id": 8543,
          "Title": "рублей",
          "Display": "Р",
          "Alias": "rub",
          "QuotaUnit": "cu"
        },
        "Group": {
          "Id": 1937544,
          "Title": "Звонки на номера Qmobile доступны при любом балансе",
          "SortOrder": 60
        }
      },
      {
        "Id": 1937631,
        "Title": "Сколько стоит подключение и переход",
        "Value": "Cтоимость подключения - 610 ₽. Стоимость повторной смены тарифа - 150 ₽. Переход на тариф бесплатный раз в 30 дней, при смене тарифа чаще списывается дополнительная плата.",
        "Group": {
          "Id": 1937547,
          "Title": "Дополнительная информация",
          "SortOrder": 1000
        }
      },
      {
        "Id": 1937632,
        "Title": "Как списывается абонентская плата",
        "SortOrder": 20,
        "Value": "Абонентская плата спишется в первый раз в момент подключения пропорционально оставшимся дням до начала следующего календарного месяца. В следующий раз абонентская плата будет списана 1-го числа следующего месяца в полном размере.",
        "Group": {
          "Id": 1937547,
          "Title": "Дополнительная информация",
          "SortOrder": 1000
        }
      },
      {
        "Id": 1937633,
        "Title": "Где действют условия",
        "SortOrder": 30,
        "Value": "Тариф действует по всей России.",
        "Group": {
          "Id": 1937547,
          "Title": "Дополнительная информация",
          "SortOrder": 1000
        }
      },
      {
        "Id": 1937634,
        "Title": "Какие услуги входят в тариф",
        "SortOrder": 40,
        "Value": "Звонки на номера Qmobile - 300 минут в месяц. Пакет интернета - 2 Гб в месяц. SMS на номера любых операторов России - 100 сообщений в месяц.",
        "Group": {
          "Id": 1937547,
          "Title": "Дополнительная информация",
          "SortOrder": 1000
        }
      },
      {
        "Id": 1937808,
        "Title": "Перенос остатков",
        "Group": {
          "Id": 1937807,
          "Title": "Преимущества",
          "SortOrder": -1
        }
      },
      {
        "Id": 1937809,
        "Title": "Безлимит на видеосвязь",
        "SortOrder": 10,
        "Group": {
          "Id": 1937807,
          "Title": "Преимущества",
          "SortOrder": -1
        }
      },
      {
        "Id": 1937810,
        "Title": "Безлимит на музыку",
        "SortOrder": 20,
        "Group": {
          "Id": 1937807,
          "Title": "Преимущества",
          "SortOrder": -1
        }
      },
      {
        "Id": 1937811,
        "Title": "Безлимит на соцсети",
        "SortOrder": 30,
        "Group": {
          "Id": 1937807,
          "Title": "Преимущества",
          "SortOrder": -1
        }
      }
    ],
    "Type": "Tariff",
    "ServicesOnTariff": [
      {
        "Id": 1937635,
        "Service": {
          "Id": 1937206,
          "MarketingProduct": {
            "Id": 1937203,
            "Title": "Qmobile игры",
            "Alias": "qmobile_igry"
          },
          "Description": "Подписка на игровую платформу Qmobile",
          "Modifiers": [
            {
              "Id": 19628,
              "Title": "Новый",
              "Alias": "IsNew",
              "HideInMarketingProducts": false,
              "HideInRegionalProducts": false
            }
          ]
        },
        "Parent": {
          "Id": 1937636,
          "Title": "+Интернет",
          "Type": 404.0,
          "Modifiers": [
            {
              "Id": 8469,
              "Title": "Рекомендует",
              "Alias": "Recommends"
            },
            {
              "Id": 1936529,
              "Title": "Показывать в карточке тарифа",
              "Alias": "ShowInTariffCard"
            }
          ],
          "Parameters": [
            {
              "Id": 1938339,
              "Title": "Абонентская плата",
              "NumValue": 300.0,
              "BaseParameter": {
                "Id": 8476,
                "Title": "Абонентская плата",
                "Alias": "SubscriptionFee"
              },
              "Unit": {
                "Id": 8540,
                "Title": "рублей в месяц",
                "Display": "руб. в месяц",
                "QuotaPeriod": "monthly"
              }
            }
          ]
        }
      },
      {
        "Id": 1937637,
        "Service": {
          "Id": 1937189,
          "MarketingProduct": {
            "Id": 1937187,
            "Title": "Qmobile  книги",
            "Alias": "qmobile_knigi"
          },
          "Description": "Неограниченный доступ к онлайн библиотеке"
        },
        "Parent": {
          "Id": 1937638,
          "Title": "Забугорище",
          "Type": 404.0,
          "Modifiers": [
            {
              "Id": 8471,
              "Title": "Включено по умолчанию",
              "Alias": "EnabledByDefault"
            },
            {
              "Id": 1936529,
              "Title": "Показывать в карточке тарифа",
              "Alias": "ShowInTariffCard"
            }
          ],
          "Parameters": [
            {
              "Id": 1938342,
              "Title": "Абонентская плата",
              "NumValue": 125.0,
              "BaseParameter": {
                "Id": 8476,
                "Title": "Абонентская плата",
                "Alias": "SubscriptionFee"
              }
            }
          ]
        }
      },
      {
        "Id": 1938116,
        "Service": {
          "Id": 1938102,
          "MarketingProduct": {
            "Id": 1938100,
            "Title": "Больше минут",
            "Alias": "bolshe_minut",
            "Groups": [
              {
                "Id": 23579,
                "Title": "Звонки",
                "SortOrder": 0,
                "OldSiteId": 31,
                "Type": "ProductGroup"
              }
            ]
          },
          "Description": "Добавляет целых 100 минут!"
        },
        "Parent": {
          "Id": 1938115,
          "Title": "Услуга 'Больше минут' для тарифа 'МЫ Qmobile +1 ГБ' в регионе 'Москва и Подмосковье,PDA-версия сайта,Москва и Подмосковье'",
          "Type": 404.0,
          "Parameters": [
            {
              "Id": 1938354,
              "Title": "Пакет минут",
              "NumValue": 100.0,
              "BaseParameter": {
                "Id": 8488,
                "Title": "Пакет минут",
                "Alias": "MinutesPackage"
              },
              "Unit": {
                "Id": 1935783,
                "Title": "минут",
                "Display": "мин.",
                "Alias": "minutes",
                "QuotaUnit": "min"
              }
            },
            {
              "Id": 1938356,
              "Title": "Абонентская плата",
              "NumValue": 75.0,
              "BaseParameter": {
                "Id": 8476,
                "Title": "Абонентская плата",
                "Alias": "SubscriptionFee"
              },
              "Unit": {
                "Id": 8543,
                "Title": "рублей",
                "Display": "Р",
                "Alias": "rub",
                "QuotaUnit": "cu"
              }
            }
          ]
        }
      },
      {
        "Id": 1938118,
        "Service": {
          "Id": 1938093,
          "MarketingProduct": {
            "Id": 1937050,
            "Title": "Пакет 100 SMS",
            "Alias": "paket_100_sms",
            "Groups": [
              {
                "Id": 23580,
                "Title": "Сообщения",
                "SortOrder": 2,
                "OldSiteId": 32,
                "Type": "ProductGroup"
              }
            ]
          },
          "Description": "Прибавляет 100 SMS к пакету сообщений."
        },
        "Parent": {
          "Id": 1938117,
          "Title": "Услуга 'Пакет 100 SMS' для тарифа 'МЫ Qmobile +1 ГБ' в регионе 'Москва и Подмосковье,PDA-версия сайта,Москва и Подмосковье'",
          "Type": 404.0,
          "Parameters": [
            {
              "Id": 1938346,
              "Title": "Абонентская плата",
              "NumValue": 50.0,
              "BaseParameter": {
                "Id": 8476,
                "Title": "Абонентская плата",
                "Alias": "SubscriptionFee"
              },
              "Unit": {
                "Id": 8543,
                "Title": "рублей",
                "Display": "Р",
                "Alias": "rub",
                "QuotaUnit": "cu"
              }
            },
            {
              "Id": 1938347,
              "Title": "Пакет СМС",
              "NumValue": 100.0,
              "BaseParameter": {
                "Id": 8486,
                "Title": "Пакет сообщений",
                "Alias": "MessagesPackage"
              },
              "Unit": {
                "Id": 1935790,
                "Title": "штук",
                "Display": "шт.",
                "Alias": "messages",
                "QuotaUnit": "message"
              }
            }
          ]
        }
      },
      {
        "Id": 1938120,
        "Service": {
          "Id": 1936977,
          "MarketingProduct": {
            "Id": 1936516,
            "Title": "3 ГБ",
            "Alias": "3gb"
          },
          "Description": "Добавляет 3 ГБ к пакету мобильного интернета на месяц",
          "Modifiers": [
            {
              "Id": 23525,
              "Title": "Дополнительный пакет",
              "Alias": "ExtraPackage"
            }
          ]
        },
        "Parent": {
          "Id": 1938119,
          "Title": "Услуга '3 ГБ' для тарифа 'МЫ Qmobile +1 ГБ' в регионе 'Москва и Подмосковье,PDA-версия сайта,Москва и Подмосковье'",
          "Type": 404.0,
          "Parameters": [
            {
              "Id": 1938350,
              "Title": "Абонентская плата",
              "NumValue": 100.0,
              "BaseParameter": {
                "Id": 8476,
                "Title": "Абонентская плата",
                "Alias": "SubscriptionFee"
              },
              "Unit": {
                "Id": 8543,
                "Title": "рублей",
                "Display": "Р",
                "Alias": "rub",
                "QuotaUnit": "cu"
              }
            },
            {
              "Id": 1938351,
              "Title": "Пакет интернета",
              "NumValue": 3.0,
              "BaseParameter": {
                "Id": 8487,
                "Title": "Пакет интернета",
                "Alias": "InternetPackage"
              },
              "Unit": {
                "Id": 159111,
                "Title": "гигабайт",
                "Display": "Гб",
                "Alias": "gigabytes",
                "QuotaUnit": "gb"
              }
            }
          ]
        }
      }
    ],
    "PdfTemplates": [
      {
        "Id": 1937094,
        "Title": "as_is_template",
        "Type": "pdf",
        "PdfTemplateFile": {
          "Name": "as_is_template.zip",
          "FileSizeBytes": 2005,
          "AbsoluteUrl": "//storage.demo.dev.qsupport.ru/qmobile_catalog/contents/581/as_is_template.zip"
        },
        "PdfTemplateEngine": "handlebars"
      }
    ]
  }));
});

app.listen(3000);
