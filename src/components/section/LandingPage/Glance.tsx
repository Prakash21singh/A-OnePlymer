import { Card, CardContent } from "@/components/ui/card";

export default function CompanyGlance() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          A Glance at Our Company
        </h2>
        <Card className="w-full max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0 mx-auto">
            <div className="aspect-video relative mx-auto">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/cn-CPmAoLXk?si=juzDU4nAWXeR9GGL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </CardContent>
        </Card>
        <p className="mt-4 text-center text-gray-600">
          Experience the energy and innovation that drives our company forward.
        </p>
      </div>
    </section>
  );
}
