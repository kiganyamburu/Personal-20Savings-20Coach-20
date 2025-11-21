import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import {
  MessageCircle,
  TrendingUp,
  PieChart,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10">
      <Header />

      {/* Hero Section */}
      <section className="container max-w-screen-2xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                AI-Powered Financial Guidance
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Your Personal{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Savings Coach
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Chat naturally about your spending, and let our AI help you
                build better financial habits, save more money, and achieve your
                goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/chat"
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "text-base font-medium transition-colors",
                )}
              >
                Start Chatting
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                What you can do:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Track daily spending",
                  "Analyze expenses",
                  "Get smart budgets",
                  "Receive insights",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-card to-muted rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="space-y-4">
                <div className="h-12 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-4/5" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-muted/50 space-y-2"
                    >
                      <div className="h-2 bg-primary rounded" />
                      <div className="h-4 bg-muted rounded w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border/40 bg-muted/20">
        <div className="container max-w-screen-2xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything you need to manage your money
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you take control of your
              finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Natural Chat Interface",
                description:
                  "Just chat naturally about your spending. No complex forms or confusing interfaces.",
              },
              {
                icon: TrendingUp,
                title: "Smart Analytics",
                description:
                  "Get detailed insights into your spending patterns and trends over time.",
              },
              {
                icon: Target,
                title: "Personalized Goals",
                description:
                  "Set savings goals and get AI-powered recommendations tailored to your situation.",
              },
              {
                icon: PieChart,
                title: "Visual Reports",
                description:
                  "See beautiful charts and reports that break down exactly where your money goes.",
              },
              {
                icon: Zap,
                title: "Instant Recommendations",
                description:
                  "Get actionable advice on how to save more and spend smarter.",
              },
              {
                icon: CheckCircle2,
                title: "Real-Time Tracking",
                description:
                  "Track expenses in real-time and stay on top of your budget automatically.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-border/50 bg-gradient-to-br from-card to-muted/10 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 container max-w-screen-2xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Chat About Your Spending",
              description:
                "Simply tell the coach about your expenses. Say things like 'spent $50 on groceries' or 'my rent is $1,500'.",
            },
            {
              step: "2",
              title: "Get Personalized Insights",
              description:
                "The AI analyzes your spending patterns and creates a personalized financial profile just for you.",
            },
            {
              step: "3",
              title: "Save More, Stress Less",
              description:
                "Follow personalized recommendations and watch your savings grow with confidence.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-8 -left-2 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
              <div className="relative text-center space-y-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-6 -right-4 text-primary/30">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border/40">
        <div className="container max-w-screen-2xl">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 p-8 sm:p-12 lg:p-16 text-center">
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Ready to take control of your finances?
              </h2>
              <p className="text-lg text-muted-foreground">
                Start chatting with your Personal Savings Coach today and begin
                your journey to better financial health.
              </p>
              <Link
                to="/chat"
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "text-base font-medium transition-colors",
                )}
              >
                Start Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border/40 bg-muted/30">
        <div className="container max-w-screen-2xl">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2024 Personal Savings Coach. All rights reserved. Built with
              care to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
